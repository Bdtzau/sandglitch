var Nes = require('nes');
var Path = require('path');

exports.register = function(server, options, next) {

	server.subscription('/sandglitch-subscription');

	server.route({
		method: 'POST',
		path: '/sand',
		config: {

			id: 'chat',
			handler: function (request, reply) {

				var payload = request.payload;

				// server.log('new message in: /chat', {message: request.payload.message});

				// server.publish('/sandglitch-subscription', {
				// 	message: payload.message,
				// 	timestamp: payload.timestamp,
				// 	username: payload.username
				// });

				return reply('your chat message was processed');
			},
			description: 'Chat message handler'
		}
	});


	server.route({
		method: 'GET',
		path: '/node_modules/nes/lib/client.js',
		config: {
			handler: {
				file: Path.join(__dirname, '..', 'node_modules/nes/lib/client.js')
			},
			description: 'websocket client library'
		}
	});


	next();
};

exports.register.attributes = {
    name: 'websockets-routes',
    version: '1.0.0',
    dependencies: ['nes']
};