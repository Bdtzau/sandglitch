(function () {
	var app = angular.module('sandglitch', ['ngMaterial'])
		.config(function($mdThemingProvider) {
			$mdThemingProvider.theme('default')
				.accentPalette('deep-purple')
				.backgroundPalette('light-blue');
		});

})();