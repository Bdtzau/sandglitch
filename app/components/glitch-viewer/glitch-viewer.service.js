angular.module('sandglitch')
	.service('GlitchViewerService', function ( $http, $q) {

		// var client = new nes.Client('ws://localhost:8080');
		this.effects = [];

		this.updateImage = function (image) {
			this.imageToGlitch = image;
		}
		

		this.sendImage = function ( img, effects ) {
			
			var deferred = $q.defer();

			img = this.imageToGlitch;
			

			var formData = new FormData();

			var blob = dataURLtoBlob(img);
			console.log(effects);

			formData.append('image', blob, 'temp.jpg');
			formData.append('effects', angular.toJson(effects));
			console.log(formData);

			$http.post('/api/sand', formData, {

				headers: { 'Content-Type': undefined },
				transformRequest: angular.identity,
			})
			.success(function (results) {

				var data = results || [];
				console.log('post success', results);
				deferred.resolve(data);
			})
			.error(function (error) {

				console.log(error);
				deferred.reject(error);
			});;

			return deferred.promise;
		};

		function dataURLtoBlob(dataurl) {
			var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
				bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
			while(n--){
				u8arr[n] = bstr.charCodeAt(n);
			}
			return new Blob([u8arr], {type:mime});
		}

		// client.connect(function (err) {

		// 	console.error(err);
		// });

		// console.log('pokeService: ', this);

		// this.getItems = function () {
		// 	console.log('get items');
		// }


		// this.searchDex = function(qType, qVal) {

		// 	var deferred = $q.defer(),
		// 	// url = 'http://api.reddit.com/hot?after=' + after;
		// 	qVal = qVal || "";
		// 	url = 'http://pokeapi.co/api/v1/' + qType + '/' + qVal;
			
		// 	$http.get(url)
		// 		.success(function (results) {
		// 			var data = results || [];
		// 			deferred.resolve(data);
		// 		})
		// 		.error(function (error) {
		// 			console.log(error);
		// 			deferred.reject (error);
		// 		});

		// 	return deferred.promise;
		// };

	});