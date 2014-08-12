'use strict';

/**
 * @ngdoc function
 * @name pointmapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pointmapApp
 */
angular.module('pointmapApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.map = {
	    center: {
	        latitude: 45,
	        longitude: -73
	    },
	    zoom: 8
	};
	
  });
