var Fs = require('fs');
var Hoek = require('hoek');
// var Wreck = require('wreck');
// var Joi = require('joi');
// var Boom = require('boom');
var Nes = require('nes');
var Fs = require('fs');
var Url = require('url');
var Sandglitch = require('./../lib/sandglitch.js');

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

				console.log(data);

				var image = data.img;
				var effects = data.effects;
				var file = fs.createWriteStream( __dirname + '/assets/temp/temp.jpg');

				file.on('error', function (err) {
					console.error(err);
				});

				data.image.pipe(file);

				data.image.on('end', function (err) {
					var ret = {
						filename: data.image.hapi.filename,
						headers: data.file.hapi.headers
					};
					reply(JSON.stringify(ret));
				});

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