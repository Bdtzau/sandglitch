angular.module('sandglitch')
	.factory('GlitchViewerFactory', function (GlitchViewerService, Ahdin) {

	var Sandglitch = function() { // constructor

		this.compressFile = function (file) {
			Ahdin.compress({
				sourceFile: file,
				maxWidth: 500,
				maxHeight: 500,
				outputFormat: 'jpeg'
			}).then(function(compressedBlob) {
				// doSomething(compressedBlob);
				return compressedBlob;
			});
		}

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
	return Sandglitch;
});