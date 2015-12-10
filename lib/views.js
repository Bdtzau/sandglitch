

exports.register = function(server, options, next) {

	console.log(__dirname + "/../../");


	server.route({
		method: 'GET',
		path: '/',
		handler: function(request, reply) {

			reply.file('./index.html');
		}
	});

	next();
};

exports.register.attributes = {
	name: 'views-routes',
	version: '1.0.0'
};