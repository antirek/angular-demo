angular
    .module('appRoutes', [])
    .config(['$stateProvider', '$urlRouterProvider', 
        //function($routeProvider, $locationProvider) {
          function ($stateProvider, $urlRouterProvider) {

          //$urlRouterProvider.otherwise("/nerds");
          
          $stateProvider
            .state('geeks', {
              url: '/geeks',
              templateUrl: 'partials/geek'
            })


          .state('nerds', {
            url: '/nerds',
            templateUrl: 'partials/nerd',
            controller: 'NerdListController'
          })          
          .state('nerds.view', {
            url: '/view/:id',
            views: {
                'detail': {
                    templateUrl: 'partials/nerds/view',
                    controller: 'NerdViewController'
                }
            }
          })

}]);