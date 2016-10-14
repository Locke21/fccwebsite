var noobcorner = angular.module('noobcorner', ['ngRoute']);

noobcorner.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'tpls/home.html',
      controller: 'HomeCtrl'
    })
    .when('/news', {
      templateUrl: 'tpls/test.html',
      controller: 'NewsCtrl'
    });
});

noobcorner.controller('MainCtrl', function($scope){
  $scope.shrink = false;

  $scope.toggleNavBar = function(){
    $('.navItemsRight').removeClass('shrink');
    $('.navItemsLeft').removeClass('shrink');
    $('.navLogo').removeClass('shrink');
  }

  $(window).scroll(function() {
     $scope.$apply(function() {
      if ($(document).scrollTop() > 50) {

        $('.myNavbar').addClass('shrink');
        $('.myNavbar-nav').addClass('shrink');
        $('.myBrand').addClass('shrink');

        $('.navItemsRight').addClass('shrink');
        $('.navItemsLeft').addClass('shrink');
        $('.navLogo').addClass('shrink');

        $scope.shrink = true;
      } else {
        $('.myNavbar').removeClass('shrink');
        $('.myNavbar-nav').removeClass('shrink');
        $('.myBrand').removeClass('shrink');

        $('.navItemsRight').removeClass('shrink');
        $('.navItemsLeft').removeClass('shrink');
        $('.navLogo').removeClass('shrink');

        $scope.shrink = false;
      }
    });
  });
});
