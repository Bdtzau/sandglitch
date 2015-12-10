angular.module('sandglitch')
	.controller('GlitchViewerController', function ($scope, GlitchViewerFactory, GlitchSliderService ) {

		var vm = this;

		vm.previewFactory = new GlitchViewerFactory();

		vm.origUrl = vm.previewFactory.origUrl;
		vm.previewUrl = vm.previewFactory.previewUrl;
		vm.previewImage;

		vm.getImgUrl = function () {
			console.log(vm.previewFactory.previewUrl);
			return vm.previewFactory.previewUrl;
		};

		vm.updatePreview = function() {

			

			if (vm.inputImage) {

				vm.previewFactory.compressFile(vm.inputImage);
			} else {

				vm.previewUrl = "";
			}
		};

	});