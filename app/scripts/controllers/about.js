'use strict';

/**
 * @ngdoc function
 * @name pointmapApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pointmapApp
 */
angular.module('pointmapApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
