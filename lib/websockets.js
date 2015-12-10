var Nes = require('nes');
var Path = require('path');

exports.register = function(server, options, next) {

	server.subscription('/sandglitch-subscription');


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