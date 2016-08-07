angular
	.module('NerdCtrl', ['NerdService', 'xeditable'])
	.controller('NerdListController', [
		'$scope', 
		'Nerd', 
		function($scope, Nerd) {

			$scope.tagline = 'Nothing beats a pocket protector!';	
			//$scope.nerds = [{name: 'sad'},{name:'sdsd'}]//Nerd.get();	

			$scope.load = function () {
				Nerd.getAll().success(function(data){		
					$scope.nerds = data;
				});
			};

			$scope.create = function () {
				Nerd.create({name: $scope.name});
				$scope.load();
			};

			$scope.update = function (id, data) {
				console.log(id, data);
				Nerd.update(id, {name: data});
			};

			$scope.load();

		}
	])
	.controller('NerdViewController', [
		'$scope',
		'$state',
		'$stateParams', 
		'Nerd',
		function($scope, $state, $stateParams, Nerd) {

			var id = $stateParams.id;
			Nerd.get(id).success(function (data) {
				$scope.nerd = data;	
			});
		}
	]);