var Fs = require('fs');
var Hoek = require('hoek');
// var Wreck = require('wreck');
// var Joi = require('joi');
// var Boom = require('boom');
var Nes = require('nes');
var Fs = require('fs');
var Url = require('url');
var Sandglitch = require('../lib/sandglitch');

exports.register = function(server, options, next) {

	server.route({

		method: 'GET',
		path: '/local/{jsonFile*}',
		handler: function (request, reply) {

			var filePath = [__dirname, '..', 'fixtures', encodeURIComponent(request.params.jsonFile)].join('/');
			reply.file(filePath);
		}
	});

	server.route({
		method: 'POST',
		path: '/sand',
		config: {

			payload: {

				output: 'stream',
				parse: true,
				allow: 'multipart/form-data'
			},

			handler: function (request, reply) {

				var data = request.payload;
				// if (err) {
				// 	console.log(err);
				// }
				require('purdy')(request.payload);
				// console.log(data);

				// var payloadFile = Fs.createReadStream(request.payload);

				var image = data.image;
				var effects = data.effects;
				var filePath = './assets/temp/temp.jpg';
				var file = Fs.createWriteStream( filePath );

				file.on('pipe', function (src) {
					require('purdy')(src);
				});
				file.on('error', function (err) {
					console.error(err);
				});

				require('purdy')(data);
				data.image.pipe(file);

				file.on('finish', function (src) {
					require('purdy')(file);
					console.log('file.on("finish"): ' + file);
					var glitchImage = Sandglitch.glitchImage(file.path, JSON.parse(effects));
					// var ret = {
					// 	filename: data.image.hapi.filename,
					// 	headers: data.file.hapi.headers
					// };
					reply(file.path.replace('jpeg', 'gif'));
				});

				// reply(JSON.stringify(ret));

				// server.log('new message in: /chat', {message: request.payload.message});

				// server.publish('/sandglitch-subscription', {
				// 	message: payload.message,
				// 	timestamp: payload.timestamp,
				// 	username: payload.username
				// });

				// return reply(request);
			}			
		}
	});

	next();
};

exports.register.attributes = {
	name: 'apis-routes',
	version: '1.0.0'
};