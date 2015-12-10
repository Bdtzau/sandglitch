exports.register = function(server, options, next) {

	server.route({
		method: 'GET',
		path: '/favicon.ico',
		handler: {
			file: __dirname + '/../assets/favicon.ico'
		}
	});

	server.route({
		method: 'GET',
		path: '/assets/{filePath*}',
		handler: {
			directory: {
				path: __dirname + '/../assets'
			}
		}
	});

	server.route({
		method: 'GET',
		path: '/app/{filePath*}',
		handler: {
			directory: {
				path: __dirname + '/../app'
			}
		}
	});

	server.route({
		method: 'GET',
		path: '/temp/{filePath*}',
		handler: {
			directory: {
				path: __dirname + '/../temp'
			}
		}
	});

	server.route({
		method: 'GET',
		path: '/bower_components/{filePath*}',
		handler: {
			directory: {
				path: __dirname + '/../bower_components'
			}
		}
	});

	next();
};

exports.register.attributes = {
	name: 'files-routes',
	version: '1.0.0',
	dependencies: 'inert'
};