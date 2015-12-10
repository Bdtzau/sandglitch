angular.module('sandglitch')
	.controller('GlitchSliderController', function (GlitchSliderFactory, GlitchViewerFactory, $scope) {

		var vm = this;

		 vm.glitchViewerFactory = new GlitchViewerFactory();

		vm.newEffect = {};

		vm.effectCount = 0;

		vm.effectQueue = [];	

		vm.effects = [
			{	alias: 'invert',
				text: 'Invert Image', 
				options: {frequency: {min: 1, max: 100, value: 50}}
			},
			{	alias: 'reverse',
				text: 'Reverse Image', 
				options: {frequency: {min: 1, max: 100, value: 50}}
			},
			{	alias: 'swapChannels',
				text: 'Swap Channels', 
				options: {frequency: {min: 1, max: 100, value: 50}}
			},
			{	alias: 'redBlueOverlay',
				text: 'Red/Blue Overlay', 
				options: {frequency: {min: 1, max: 100, value: 50}}
			},
			{	alias: 'clampColors',
				text: 'Clamp Colors', 
				options: {
					frequency: {min: 1, max: 100, value: 50},
					max: {min: 0, max: 255, value: 128},
					tolerance: {min: 1, max: 100, value: 50}
				}
			}
		];

		// $scope.$watch('newEffect.name', function(name){
		// 	delete $scope.newEffect;
			
		// });

		vm.submitNewEffect = function () {
			console.log(vm.newEffect);

			angular.forEach(vm.effects, function(effect){
				if(effect.alias === vm.newEffect.alias){
					var dupeEffect = clone(effect);
					dupeEffect.$$hashKey = 'object:d' + vm.effectCount;
					vm.effectCount++;
					vm.effectQueue.push(dupeEffect);
					console.log(vm.effectQueue);
					// vm.selectedEffect = effect;
				}
			});
			
			// if (vm.newEffect){
			// 	vm.effectQueue.push(vm.selectedEffect);
			// 	console.log(vm.effectQueue);
			// }
		};

		vm.submitEffects =function () {
			console.log('effects submitted');
			vm.glitchViewerFactory.updateEffects(vm.effectQueue);
			vm.glitchViewerFactory.glitchImage();
		};

		function clone(obj) {
			var copy;

			// Handle the 3 simple types, and null or undefined
			if (null == obj || "object" != typeof obj) return obj;

			// Handle Date
			if (obj instanceof Date) {
				copy = new Date();
				copy.setTime(obj.getTime());
				return copy;
			}

			// Handle Array
			if (obj instanceof Array) {
				copy = [];
				for (var i = 0, len = obj.length; i < len; i++) {
					copy[i] = clone(obj[i]);
				}
				return copy;
			}

			// Handle Object
			if (obj instanceof Object) {
				copy = {};
				for (var attr in obj) {
					if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
				}
				return copy;
			}

			throw new Error("Unable to copy obj! Its type isn't supported.");
		}
	});