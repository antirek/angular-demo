angular
    .module('NerdCtrl', ['NerdService'])
    .controller('NerdListController', [
        '$scope', 
        '$state',
        'Nerd', 
        function($scope, $state, Nerd) {            
            Nerd.query(function(data){       
                $scope.nerds = data;
            });            
        }
    ])

    .controller('NerdAddController', [
        '$scope', 
        '$state',
        'Nerd', 
        function($scope, $state, Nerd) {
            $scope.create = function () {
                var nerd = new Nerd({name: $scope.name});
                nerd.$save();
                $state.go('nerds', {}, {reload:true});
            };
        }
    ])

    .controller('NerdViewController', [
        '$scope',
        '$window',
        '$state',
        '$stateParams',        
        'Nerd',
        function ($scope, $window, $state, $stateParams, Nerd) {

            $scope.nerd = Nerd.get({id: $stateParams.id});
            
            $scope.update = function (id, attribute, data) {
                $scope.nerd[attribute] = data;
                $scope.nerd.$save();
                $state.reload();
            };

            $scope.delete = function (id) {
                if ($window.confirm("Please confirm?")) {
                    Nerd.delete({id: $scope.nerd._id}, () => {                    
                        $state.go('nerds', {}, {reload:true});
                    });
                }
            };

        }
    ]);