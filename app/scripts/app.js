'use strict';

//var apiBase = 'http://localhost:8888/';

/**
 * @ngdoc overview
 * @name pointmapApp
 * @description
 * # pointmapApp
 *
 * Main module of the application.
 */
angular
  .module('pointmapApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'google-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/newpoint', {
        templateUrl: 'views/newpoint.html',
        controller: 'NewpointCtrl'
      })
      .when('/viewpoint', {
        templateUrl: 'views/viewpoint.html',
        controller: 'ViewpointCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
