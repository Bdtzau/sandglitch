angular.module('sandglitch')
	.factory('GlitchViewerFactory', function (GlitchViewerService, Ahdin) {

	var GlitchPreview = function() { // constructor

		this.effects;

		this.origUrl;

		this.previewUrl;

		this.busy = false

		this.updateEffects = function (effects) {
			this.effects = effects;
			console.log(this.effects);
		};

		this.compressFile = function (file) {

			var self = this;



			if (this.busy) {
				return;
			}
			this.busy = true;

			var reader = new FileReader();

			reader.onloadend = function () {

				self.origUrl = reader.result;
				self.previewUrl = reader.result;
				// vm.glitchUrl = vm.previewFactory.glitchImage(vm.readerUrl, reader);
			}

			Ahdin.compress({

				sourceFile: file,
				maxWidth: 500,
				maxHeight: 500,
				outputFormat: 'jpeg'
			}).then(function(compressedBlob) {

				// doSomething(compressedBlob);
				console.log(compressedBlob);
				self.origImage = compressedBlob;
				reader.readAsDataURL(compressedBlob);
				self.busy = false;
				// this.currentSrc = compressedBlob;
			});
		};

		this.glitchImage = function () {

			var self = this;

			var file = this.origUrl;

			if (this.busy) {
				return;
			}
			this.busy = true;

			GlitchViewerService.sendImage(this.origUrl, this.effects)
				.then(function (data) {
					console.log(data);
					self.previewUrl = data;
					self.busy = false;
					return data;
				});

		};

		// this.searches = [];
		// this.busy = false;
		// var after;

		// this.dexSearch = function(qType, qVal) {
		// 	var self = this;

		// 	if (this.busy) {
		// 		return;
		// 	}
		// 	this.busy = true;

		// 	GlitchViewerService.searchDex(qType, qVal)
		// 		.then(function (data) {

		// 			console.log(data);

		// 			var result = data;

		// 			// result.qType = qType;

		// 			self.busy = false;
		// 		});
		// };
	};
	return GlitchPreview;
});