(function () {


	var app = angular.module('sandglitch', ['ngMaterial', 'ahdin', 'file-model'])
		.config(function($mdThemingProvider) {
			$mdThemingProvider.theme('default')
				.accentPalette('deep-purple')
				.backgroundPalette('light-blue');
		});
	
	// requirejs(["helper/util"], function(util) {
	// 	//This function is called when scripts/helper/util.js is loaded.
	// 	//If util.js calls define(), then this function is not fired until
	// 	//util's dependencies have loaded, and the util argument will hold
	// 	//the module value for "helper/util".
	// });
})();