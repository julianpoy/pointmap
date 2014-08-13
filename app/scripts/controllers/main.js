'use strict';

/**
 * @ngdoc function
 * @name pointmapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pointmapApp
 */
angular.module('pointmapApp')
  .controller('MainCtrl', function ($scope, Points) {

    $scope.map = {
	    center: {
	        latitude: 45,
	        longitude: -73
	    },
	    zoom: 8
	};

	$scope.mapMarkers = Points.query();

  });
