angular.module('lunchtime',['ngRoute','ngAudio'

  ])

.config(function($routeProvider){
  $routeProvider
    .when('/spots', {
      templateUrl: 'spots.html',
      controller: 'spotsController'
    });

  })
  .controller('spotsController', function ($scope, $http, ngAudio){
    $scope.sound = ngAudio.load('./mp3/lunch.mp3');
    $scope.resturant = '';
    $scope.stars = '';
    $scope.addResturaunt = function (){
      $http.post('/spots', {Name: $scope.resturant, Stars: $scope.stars})
        .success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.resturant = '';
            $scope.stars = '';
          })
        .error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log('ERRRRRRRRRor!!!!!!!!',status);
          });
    };
    $scope.getSpots = function(){
      $http.get('/spots')
        .success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.spots = [];
            $scope.stars = [];
            $scope.starStyle = [];
            for (var key in data){
              $scope.spots.push(data[key]);
              var obj = {};
              obj.width = ((data[key].Stars / 5) * 80) + 'px';
              $scope.starStyle.push(obj);
            }
          })
        .error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(status);
          });
    };
    $scope.getRandom = function () {
      $scope.sound.play();
      $http.get('/spots')
        .success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            $scope.randoSpots =[];
            $scope.randomSpot = {};
            $scope.starStyle = {};
            for (var key in data){
              $scope.randoSpots.push(data[key]);
            }
            $scope.randomSpot = $scope.randoSpots[Math.floor(Math.random() * $scope.randoSpots.length)];
            $scope.starStyle.width = (($scope.randomSpot.Stars / 5) * 80) + 'px';

          })
        .error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(status);
          });
    };
  });