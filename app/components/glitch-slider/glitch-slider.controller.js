angular.module('sandglitch')
	.controller('GlitchSliderController', function (GlitchSliderFactory) {

		var vm = this;

		// vm.pokedex = new PokeFactory();
		

		vm.effects = [
			{	name: 'invert',
				text: 'Invert Image', 
				options: {frequency: {min: 1, max: 100, value: 50}}
			},
			{	name: 'reverse',
				text: 'Reverse Image', 
				options: {frequency: {min: 1, max: 100, value: 50}}
			},
			{	name: 'swapChannels',
				text: 'Swap Channels', 
				options: {frequency: {min: 1, max: 100, value: 50}}
			},
			{	name: 'redBlueOverlay',
				text: 'Red/Blue Overlay', 
				options: {frequency: {min: 1, max: 100, value: 50}}
			},
			{	name: 'clampColors',
				text: 'Clamp Colors', 
				options: {
					frequency: {min: 1, max: 100, value: 50},
					max: {min: 0, max: 255, value: 128},
					tolerance: {min: 1, max: 100, value: 50}
				}
			}
		];

		vm.submitEffects =function () {
			console.log(this.effects);
		};

		// vm.phase = 'search';
		// vm.qType = 'pokemon';
		// vm.qVal = '1';
		// vm.viewBack = 0;

	});