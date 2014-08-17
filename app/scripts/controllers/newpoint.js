'use strict';

/**
 * @ngdoc function
 * @name pointmapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pointmapApp
 */
angular.module('pointmapApp')
  .controller('NewpointCtrl', function ($scope, Points) {

    var locationBox = document.getElementById("locationbox");

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            alert("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {

        $scope.user = {};
        $scope.user.latitude = position.coords.latitude;
        $scope.user.longitude = position.coords.longitude;

        console.log($scope.user);
        console.log(position.coords.latitude);

        locationBox.innerHTML = "Latitude: " + position.coords.latitude + 
        "<br>Longitude: " + position.coords.longitude;  
    
    }

    $scope.savePoint = function(){

      //$scope.newpoint = {};

      $scope.newpoint.latitude = $scope.user.latitude;
      $scope.newpoint.longitude = $scope.user.longitude;

      console.log($scope.newpoint);
      
      $scope.test = Points.save($scope.newpoint, function(){
        console.log($scope.newpoint);
        
      });

      return false;

      
      
    }

    getLocation();

  });
