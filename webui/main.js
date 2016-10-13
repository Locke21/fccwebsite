var noobcorner = angular.module('noobcorner', ['ngRoute']);

noobcorner.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'tpls/home.html',
      controller: 'HomeCtrl'
    })
    .when('/welcome', {
      templateUrl: 'tpls/test.html'
    });
});

noobcorner.controller('MainCtrl', function($scope){
  $(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.myNavbar').addClass('shrink');
    $('.myNavbar-nav').addClass('shrink');
    $('.myBrand').addClass('shrink');
  } else {
    $('.myNavbar').removeClass('shrink');
    $('.myNavbar-nav').removeClass('shrink');
    $('.myBrand').removeClass('shrink');
  }
});
});
