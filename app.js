console.log('loaded');


var lottoApp = angular.module('lottoApp', ['ngRoute']);
lottoApp.controller('mainController', function($scope) {
  $scope.message = 'test angular message';
});


// configure our routes
lottoApp.config(function($routeProvider) {
  $routeProvider

            // route for the home page
      .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'mainController'
      })

      .when('/begin', {
        templateUrl: 'pages/begin.html',
        controller: 'beginController'
      })

        .when('/calculating', {
          templateUrl: 'pages/calculating.html',
          controller: 'calculatingController'
        })

        .when('/winner', {
          templateUrl: 'pages/winner.html',
          controller: 'winnerController'
        })

        .when('/looser', {
          templateUrl: 'pages/looser.html',
          controller: 'looserController'
        });


});

    // create the controller and inject Angular's $scope
lottoApp.controller('mainController', function($scope, $http) {
  $scope.message = 'main';


  $scope.update = function(user) {
    $scope.master = angular.copy(user);
  };







});

lottoApp.controller('beginController', function($scope) {
  $scope.message = 'begin';
});

lottoApp.controller('calculatingController', function($scope) {
  $scope.message = 'calc';
});

lottoApp.controller('winnerController', function($scope) {
  $scope.message = 'win';
});

lottoApp.controller('looserController', function($scope) {
  $scope.message = 'loser';
});
