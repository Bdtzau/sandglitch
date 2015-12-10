(function () {
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
			glitcher.RedBlueOverlay(img);
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
					if (effect.name === 'invert') {
						randInvert(frame.data, effect.frequency.value);
					} else
					if (effect.name === 'reverse') {
						randReverse(frame.data, effects.frequency.value);
					} else
					if (effect.name === 'swapChannels') {
						randSwapChannels(frame.data, effect.frequency.value);
					} else
					if (effect.name === 'redBlueOverlay') {
						randRBOverlay(frame.data, effect.frequency.value);
					} else
					if (effect.name === 'clampColors') {
						randInvert(frame.data, effect.frequency.value);
					}
				});

				console.log(r1);
			
			});
			return callback(null, image);
		});
	};

	shared.glitchImage = function (img, effects) {
		jpgToGif(orig, effects, function (err, img) {
			gifwriter(img, function (err, gif) {
			fs.writeFileSync("./output/recent-output.gif", gif);
			});
		});
	}

	return this;
})();