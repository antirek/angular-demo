angular
    .module('appRoutes', [])
    .config([
        '$stateProvider', 
        '$urlRouterProvider',        
          function ($stateProvider, $urlRouterProvider) {          

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
          .state('nerds.add', {
            url: '/add',
            views: {
                'detail': {
                    templateUrl: 'partials/nerds/add',
                    controller: 'NerdAddController'
                }
            }
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