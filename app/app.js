(function () {
	var app = angular.module('sandglitch', ['ngMaterial', 'ahdin'])
		.config(function($mdThemingProvider) {
			$mdThemingProvider.theme('default')
				.accentPalette('deep-purple')
				.backgroundPalette('light-blue');
		});
})();