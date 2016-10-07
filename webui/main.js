var noobcorner = angular.module('noobcorner', ['ngRoute']);

noobcorner.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'tpls/home.html',
      controller: 'HomeCtrl'
    })
    .when('/fabi', {
      templateUrl: 'tpls/test.html'
    });
});

noobcorner.controller('MainCtrl', function($scope){
  
});
