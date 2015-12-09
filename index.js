var Fs = require('fs');
var Hapi = require('hapi');
var Hoek = require('hoek');
var Inert = require('inert');
var Glue = require('glue');

const PORT = 8080;

var manifest = require('./app.json');

console.log(JSON.stringify(manifest));
var options = {
	relativeTo: __dirname + '/lib'
};

Glue.compose(manifest, options, function (err, server) {

	if (err) {
		console.error('Failed to start server:', err);
		throw err;
	}
	server.start(function () {

		console.log('Server is now running at:', server.info.uri);
	});
});