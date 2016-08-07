angular
    .module('appRoutes', [])
    .config(['$stateProvider', '$urlRouterProvider', 
        //function($routeProvider, $locationProvider) {
          function ($stateProvider, $urlRouterProvider) {

          $urlRouterProvider.otherwise("/nerds");
          
          $stateProvider
            .state('geeks', {
              url: '/geeks',
              templateUrl: 'partials/geek'
            })


          .state('nerds', {
            url: '/nerds',
            templateUrl: 'partials/nerd',
            controller: 'NerdController'
          })
/*
    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'partials/home',
            controller: 'MainController'
        })

        .when('/nerds', {
            templateUrl: 'partials/nerd',
            controller: 'NerdController'
        })

        .when('/nerds/edit', {
            templateUrl: 'partials/nerds/edit',
            controller: 'NerdController'
        })

        .when('/geeks', {
            templateUrl: 'partials/geek',
            controller: 'GeekController'    
        });

    $locationProvider.html5Mode(true);

*/



}]);