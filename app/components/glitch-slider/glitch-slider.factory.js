angular.module('sandglitch')
	.factory('GlitchSliderFactory', function (GlitchSliderService) {

	var Sandglitch = function() { // constructor

		this.searches = [];
		this.busy = false;
		// var after;

		this.dexSearch = function(qType, qVal) {
			var self = this;

			if (this.busy) {
				return;
			}
			this.busy = true;

			GlitchSliderService.searchDex(qType, qVal)
				.then(function (data) {

					console.log(data);

					var result = data;

					// result.qType = qType;

					self.busy = false;
				});
		};
	};
	return Sandglitch;
});