angular.module('sandglitch')
	.factory('GlitchViewerFactory', function (GlitchViewerService, Ahdin) {

	var GlitchPreview = function() { // constructor

		this.busy = false

		this.compressFile = function (file, reader) {

			var self = this;

			if (this.busy) {
				return;
			}
			this.busy = true;

			Ahdin.compress({

				sourceFile: file,
				maxWidth: 500,
				maxHeight: 500,
				outputFormat: 'jpeg'
			}).then(function(compressedBlob) {

				// doSomething(compressedBlob);
				console.log(compressedBlob);
				reader.readAsDataURL(compressedBlob);
				self.busy = false;
				// this.currentSrc = compressedBlob;
			});
		};

		this.glitchImage = function (file, reader) {

			var self = this;

			if (this.busy) {
				return;
			}
			this.busy = true;

			GlitchViewerService.sendImage(file)
				.then(function (data) {
					console.log(data);
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