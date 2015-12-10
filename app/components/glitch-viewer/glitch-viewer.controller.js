angular.module('sandglitch')
	.controller('GlitchViewerController', function (GlitchViewerFactory, $scope) {

		var vm = this;

		vm.previewFactory = new GlitchViewerFactory();

		vm.inputImage;
		vm.previewImage;

		vm.updatePreview = function() {

			var reader = new FileReader();

			reader.onloadend = function () {

				vm.origUrl = reader.result;
				vm.readerUrl = reader.result;
				vm.glitchUrl = vm.previewFactory.glitchImage(vm.readerUrl, reader);
			}

			if (vm.inputImage) {

				vm.previewFactory.compressFile(vm.inputImage, reader);
				window.setTimeout(function () {console.log(vm.readerImage)}, 500)
			} else {

				vm.previewUrl = "";
			}
		};

	});