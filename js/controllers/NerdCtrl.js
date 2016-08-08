angular
    .module('NerdCtrl', ['NerdService', 'xeditable'])
    .controller('NerdListController', [
        '$scope', 
        '$state',
        'Nerd', 
        function($scope, $state, Nerd) {
            $scope.load = function () {
                Nerd.getAll().success(function(data){       
                    $scope.nerds = data;
                });
            };

            $scope.create = function () {
                Nerd.create({name: $scope.name});
                $scope.load();
                $state.reload();
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

            $scope.$index = $stateParams.id;
            if ($scope.nerds){ 
                $scope.nerd = $scope.nerds[$scope.$index]; 
            }else{
                $state.go('nerds', {}, {reload: true});
            }         

            $scope.update = function (id, attribute, data) {
                console.log(id, attribute, data);
                $scope.nerds[id][attribute] = data;
                $scope.nerd = $scope.nerds[id];

                Nerd.update($scope.nerd._id, $scope.nerds[id]);
                //$state.reload();
            };

            $scope.delete = function (id) {
                Nerd.delete($scope.nerd._id).success((data) => {
                    
                    $state.go('nerds', {}, {reload:true});

                })
            }
        }
    ]);