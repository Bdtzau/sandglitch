angular.module('sandglitch')
	.service('GlitchViewerService', function ( $http, $q) {

		// var client = new nes.Client('ws://localhost:8080');
		
		this.sendImage = function ( img ) {

			var deferred = $q.defer();

			var url = '/sand';
			$http.post(url, img)
				.success(function (results) {

					var data = results || [];
					console.log('post success', results);
					deferred.resolve(data);
				}).error(function (error) {

					console.log(error);
					deferred.reject(error);
				});
		};

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