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

	next();
};

exports.register.attributes = {
	name: 'apis-routes',
	version: '1.0.0'
};