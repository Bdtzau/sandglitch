angular.module('sandglitch')
	.controller('GlitchViewerController', function (GlitchViewerFactory, $scope) {

		var vm = this;

		var Sandglitch = new GlitchViewerFactory();

		vm.inputImage;
		vm.previewImage;

		vm.updatePreview = function() {
			var reader = new FileReader();
			reader.readAsDataURL(vm.inputImage);
			reader.onloadend = function () {
				vm.previewUrl = reader.result;
			}

			if (vm.inputImage) {
				vm.previewImage = Sandglitch.compressFile(vm.inputImage);
				reader.readAsDataURL(vm.previewImage);
			} else {
				vm.previewUrl = "";
			}
			console.log(vm.previewUrl);
			// console.log(vm.inputImage);
		};

	});