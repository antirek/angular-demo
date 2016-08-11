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
        'growl',
        function($scope, $state, Nerd, growl) {
            $scope.create = function () {
                var nerd = new Nerd({name: $scope.name});
                nerd.$save().then(function () {
                    growl.success("create success");
                })
                .catch(function(err) {
                    growl.error("error");
                });
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
        'growl',
        function ($scope, $window, $state, $stateParams, Nerd, growl) {

            Nerd.get({id: $stateParams.id}).$promise.then(function(nerd) {
                $scope.nerd = nerd;
            })
            .catch(function(err) {
                growl.error("error");
            }); 
            
            $scope.update = function (id, attribute, data) {
                $scope.nerd[attribute] = data;
                $scope.nerd.$save().then(function () {
                    growl.success("update success");
                })
                .catch(function(err) {
                    growl.error("error");
                });
                $state.reload();
            };

            $scope.delete = function (id) {
                //console.log($scope);
                if ($window.confirm("Please confirm?")) {
                    Nerd.remove({id: $scope.nerd._id}).$promise
                    .then(() => {
                        growl.success("remove success");                                         
                    })
                    .catch(function(err) {
                        growl.error("error");
                    });                    
                }
                $state.go('nerds', {}, {reload: true});
            };

        }
    ]);