angular.module('sandglitch')
	.controller('GlitchViewerController', function ($scope, GlitchViewerFactory, GlitchViewerService ) {

		var vm = this;

		vm.previewFactory = new GlitchViewerFactory();

		vm.origUrl = vm.previewFactory.origUrl;
		vm.previewUrl = vm.previewFactory.previewUrl ? vm.previewFactory.previewUrl : 'assets/img/default.jpg';
		vm.previewImage;

		vm.getImgUrl = function () {
			// console.log(vm.previewFactory.previewUrl);
			return vm.previewFactory.previewUrl;
		};

		vm.getGlitchUrl = function () {
			// console.log(vm.previewFactory.previewUrl);
			return GlitchViewerService.glitchUrl;
		};

		vm.updatePreview = function() {


			if (vm.inputImage) {
				console.log(vm.inputImage);
				vm.previewFactory.compressFile(vm.inputImage);
				vm.getImgUrl();
			} else {

				vm.previewUrl = "assets/img/default.jpg";
			}
		};

	});