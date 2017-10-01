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

        .when('/calculating', {
          templateUrl: 'pages/calculating.html',
          controller: 'mainController'
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

  var playernumbers = [];

  $scope.update = function(user) {
    $scope.master = angular.copy(user);

    // for matching lotto data
    $scope.playernumbers = [user.number1, user.number2, user.number3, user.number4, user.number5, user.number6]

    console.log('playernumbers', $scope.playernumbers);

    // for html bind use
    $scope.numbersinstring = $scope.playernumbers.toString();
    console.log($scope.numbersinstring);

  };







});

lottoApp.controller('winnerController', function($scope) {
  $scope.message = 'win';
});

lottoApp.controller('looserController', function($scope) {
  $scope.message = 'loser';
});
