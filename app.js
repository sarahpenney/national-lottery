console.log('loaded');
var lottoApp = angular.module('lottoApp', ['ngRoute']);

// configure our routes
lottoApp.config(function($routeProvider) {
  $routeProvider

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

        .when('/loser', {
          templateUrl: 'pages/loser.html',
          controller: 'loserController'
        });
});

    // create the controller and inject Angular's $scope
lottoApp.controller('mainController', function($scope, $http, $timeout, $location) {
  $scope.message = 'main';

  var playernumbers = [];

  $scope.update = function(user) {
    $scope.master = angular.copy(user);

    // for matching lotto data: get numbers in array and sort from low to high
    $scope.playernumbersinput = [user.number1, user.number2, user.number3, user.number4, user.number5, user.number6]
    $scope.playernumbers = $scope.playernumbersinput.sort(function(a, b){return a-b});
    console.log('playernumbers', $scope.playernumbers);
    // for html use
    $scope.numbersinstring = $scope.playernumbers.toString();
    console.log($scope.numbersinstring);

    // get the data to match numbers
    $http.get('/dummy-data.json')
          .success(function (data) {
            $scope.data = data;
            angular.forEach($scope.data, function(item){
              console.log($scope.data);
              console.log(item.numbers);
              $scope.numberstomatch = item.numbers
            });
          })
          .error(function (data) {
            console.log('err');
          });


    $timeout( function(){

      // angular.forEach($scope.playernumbersinput, function(numbers) {
      //   angular.forEach($scope.numberstomatch, function(numbers) {
      //     if ($scope.playernumbersinput === $scope.numberstomatch) {
      //       $location.path("pages/winner.html");
      //     }
      //   });
      // });


      if ($scope.playernumbersinput === $scope.numberstomatch) {
        $location.path("pages/winner.html");
      } else {
        $location.path("pages/loser.html");
      }

    }, 4000);

  };

  $scope.second = false;
  $scope.first = true;

  $scope.showAlert = function(){
    $scope.second = true;
    $scope.first = false;
  };


});

lottoApp.controller('winnerController', function($scope) {
  $scope.message = 'win';
});

lottoApp.controller('loserController', function($scope) {
  $scope.message = 'loser';
});
