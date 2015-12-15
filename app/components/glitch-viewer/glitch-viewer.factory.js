angular.module('sandglitch')
	.factory('GlitchViewerFactory', function (GlitchViewerService, Ahdin) {

	var GlitchPreview = function() { // constructor

		var vm = this;

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
				GlitchViewerService.updateImage(reader.result);
				self.busy = false;
				// vm.glitchUrl = vm.previewFactory.glitchImage(vm.readerUrl, reader);
			}

			Ahdin.compress({

				sourceFile: file,
				maxWidth: 500,
				maxHeight: 500,
				outputFormat: 'jpeg',
				quality: 0.8
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

			console.log(this);

			GlitchViewerService.sendImage(this.origImage, this.effects)
				.then(function (data) {
					console.log(data);
					self.glitchUrl = data;
					self.busy = false;
					return data;
				});

		};

	};
	return GlitchPreview;
});