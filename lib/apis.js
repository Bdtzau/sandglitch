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

			handler: function (request, reply) {

				var payload = request.payload;

				// server.log('new message in: /chat', {message: request.payload.message});

				// server.publish('/sandglitch-subscription', {
				// 	message: payload.message,
				// 	timestamp: payload.timestamp,
				// 	username: payload.username
				// });

				return reply('your image was sent');
			},
			description: 'Image receiving handler'
		}
	});

	next();
};

exports.register.attributes = {
	name: 'apis-routes',
	version: '1.0.0'
};