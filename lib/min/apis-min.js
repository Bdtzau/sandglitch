var Fs=require("fs"),Hoek=require("hoek"),Nes=require("nes"),Fs=require("fs"),Url=require("url"),Sandglitch=require("./../lib/sandglitch.js");exports.register=function(e,r,i){e.route({method:"GET",path:"/local/{jsonFile*}",handler:function(e,r){var i=[__dirname,"..","fixtures",encodeURIComponent(e.params.jsonFile)].join("/");r.file(i)}}),i()},exports.register.attributes={name:"apis-routes",version:"1.0.0"};