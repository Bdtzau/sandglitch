// (function () {
	var glitcher = require("glitcher");
	var fs = require("fs");

	// var file = process.argv[2] || "./assets/temp/image.jpg";
	// var orig = fs.readFileSync(file);
	var gifwriter = require("./../node_modules/glitcher/node_modules/writegif");
	var readimage = require("./../node_modules/glitcher/node_modules/readimage");

	var shared = {};

	var randInvert = function (img, freq) {
		var rand = Math.random() * 100;
		if (rand < freq) {
			glitcher.invertRGBA(img);
		}
	};

	var randReverse = function (img, freq) {
		var rand = Math.random() * 100;
		if (rand < freq) {
			glitcher.reverseRGBA(img);
		}
	};

	var randSwapChannels = function (img, freq) {
		var rand = Math.random() * 100;
		if (rand < freq) {
			glitcher.swapChannels(img);
		}
	};

	var randRBOverlay = function (img, freq) {
		var rand = Math.random() * 100;
		if (rand < freq) {
			glitcher.redBlueOverlay(img);
		}
	};

	var randClampColors = function (img, freq, max, tolerance) {
		var rand = Math.random() * 100;
		if (rand < freq) {
			glitcher.clampColors(img, max, tolerance);
		}
	};

	shared.jpgToGif = function (orig, effects, callback) {
	  
		readimage(orig, function (err, image) {
			if (err) {
				return callback(err);
			}
			if (image.frames.length === 1) {
				var orig = glitcher.copy(image.frames[0].data);
				for (var i = 0; i < 30; i++) {
					image.addFrame(glitcher.copy(orig), 100);
				}
			}

			image.frames.forEach(function (frame) {


				effects.forEach(function (effect) {

					switch (effect.alias) {
						
						case 'invert':
							randInvert(frame.data, effect.options.frequency.value);
							break;

						case 'reverse':
							randReverse(frame.data, effect.options.frequency.value);
							break;

						case 'swapChannels':
							randSwapChannels(frame.data, effect.options.frequency.value);
							break;

						case 'redBlueOverlay':
							randRBOverlay(frame.data, effect.options.frequency.value);
							break;

						case 'clampColors':
							randClampColors(frame.data, effect.options.frequency.value, effect.options.max.value, effect.options.tolerance.value);
							break;
					}
				});

				// console.log(r1);
			
			});
			return callback(null, image);
		});
	};

	shared.glitchImage = function (filePath, effects) {
		require('purdy')(effects);
		shared.jpgToGif(fs.readFileSync(filePath), effects, function (err, img) {
			gifwriter(img, function (err, gif) {
			fs.writeFileSync(filePath.replace('jpg', 'gif'), gif);
			});
		});
	}

	// return shared;

	module.exports.glitchImage = shared.glitchImage;
// })();