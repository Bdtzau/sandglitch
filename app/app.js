(function () {
	var app = angular.module('sandglitch', ['ngMaterial', 'ahdin', 'file-model'])
		.config(function($mdThemingProvider) {
			$mdThemingProvider.theme('default')
				.accentPalette('deep-purple')
				.backgroundPalette('light-blue');
		});
})();