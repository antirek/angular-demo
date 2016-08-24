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
        '$filter',
        function ($scope, $window, $state, $stateParams, Nerd, growl, $filter) {

            $scope.statuses = [
                {value: 1, text: 'status1'},
                {value: 2, text: 'status2'},
                {value: 3, text: 'status3'},
                {value: 4, text: 'status4'}
            ];

            $scope.showStatus = function () {
                if ($scope.nerd) {
                    var selected = $filter('filter')( $scope.statuses, {value: $scope.nerd.status});
                    return ($scope.nerd.status && selected.length) ? selected[0].text : 'Not set';
                }
            };

            Nerd.get({id: $stateParams.id}).$promise.then(function (nerd) {
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