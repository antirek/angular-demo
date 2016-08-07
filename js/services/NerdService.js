angular.module('NerdService', []).factory('Nerd', ['$http', function($http) {

	  return {
        // call to get all nerds
        getAll : function() {
        	//console.log($http.get('/api/nerds'));
            return $http.get('/api/nerds');
        },

        get : function (id) {
            //console.log($http.get('/api/nerds'));
            return $http.get('/api/nerds/' + id);
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function (data) {
            return $http.post('/api/nerds', data);
        },

        // call to DELETE a nerd
        delete : function (id) {
            return $http.delete('/api/nerds/' + id);
        },

        update:  function (id, data) {
            return $http.post('/api/nerds/' + id, data);
        }


    }       

}]);