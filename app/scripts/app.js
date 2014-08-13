'use strict';

var apiBase = 'https://7385af0d.ngrok.com/';

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
      .otherwise({
        redirectTo: '/'
      });
  });
