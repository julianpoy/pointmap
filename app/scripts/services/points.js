'use strict';

var apiBase = 'http://localhost:8888/';

angular.module('pointmapApp')
  .factory('Points', ['$resource', function($resource) {

    return $resource( apiBase + 'points/:Id', 
        { Id: '@Id' }, { 
            query: { 
                method: 'GET', 
                params: {}, 
                isArray: true 
            },
            get: { 
                method: 'GET', 
                params: { Id: '@Id' }, 
                isArray: false 
            },
            save: { 
                method: 'POST', 
                params: {},
                isArray: false 
            },
            update: { 
                method: 'PUT', 
                params: { Id: '@id' }, 
                isArray: false 
            },
            delete: { 
                method: 'DELETE', 
                params: { Id: '@Id' }, 
                isArray: false 
            }
            
        } );

}]);
