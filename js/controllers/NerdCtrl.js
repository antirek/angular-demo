angular
	.module('NerdCtrl', ['NerdService', 'xeditable'])
	.controller('NerdController', [
		'$scope', 
		'Nerd', 
		function($scope, Nerd) {

			$scope.user = {
				name: 'user name'
			};

			$scope.tagline = 'Nothing beats a pocket protector!';	
			//$scope.nerds = [{name: 'sad'},{name:'sdsd'}]//Nerd.get();	

			$scope.load = function () {
				Nerd.get().success(function(data){		
					$scope.nerds = data;
				});
			}

			$scope.create = function () {
				Nerd.create({name: $scope.name});
				$scope.load();
			};

			$scope.update = function (id, data) {
				console.log(id, data);
				Nerd.update(id, {name: data});
			}

			$scope.load();

		}
	]);