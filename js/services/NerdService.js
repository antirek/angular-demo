angular.module('NerdService', []).factory('Nerd', ['$resource', function ($resource) {
    let apiUrl = '/api/nerds/';
    /*
	return {
        // call to get all nerds
        getAll : function() {
        	//console.log($http.get('/api/nerds'));
            //return $http.get('/api/nerds');
            return $http.get(apiUrl);
        },

        get : function (id) {
            //console.log($http.get('/api/nerds'));
            return $http.get(apiUrl + id);
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function (data) {
            return $http.post(apiUrl, data);
        },

        // call to DELETE a nerd
        delete : function (id) {
            return $http.delete(apiUrl + id);
        },

        update:  function (id, data) {
            return $http.post(apiUrl + id, data);
        }

    }       

    */

    return $resource(apiUrl + ':id', { 
            id:'@_id'
        });


}]);