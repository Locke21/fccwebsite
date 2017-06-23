noobcorner.controller('HomeCtrl',['$scope','$compile','$timeout','$http','$q', function($scope, $compile, $timeout, $http, $q){

// var init = function(){
//   console.log("init ready");
//     $('#mainFrame').dragend();
// }

$timeout(function () {
  $('#mainFrame').dragend({
    afterInitialize : function(){
      $scope.$apply();
    }
  });
}, 5000);



$scope.message = "test";


  $http({
      method: 'GET',
      url: '/mockdata'
      }).then(function successCallback(response) {
        $scope.mockdata = response.data;
        $scope.message = "test2";


      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    })
    .then(function(){


    });












    // $scope.$apply(
    //   function(){
    //     $.when( firstFunc() ).done(
    //       function(){
    //         $('#mainFrame').dragend({
    //           afterInitialize : function(){
    //             $scope.message = "test2"
    //           }
    //         });
    //       });
    //   });

    // $.when( firstFunc() ).done(function(){
    //     $('#mainFrame').dragend();
    //     $scope.message = "test2";
    //
    //   }).apply();

// setTimeout(function(){
//   $scope.message = "test2";
//   $scope.$apply();
// },2000);




  $scope.toMain = function(){
    console.log("kjdsjfls");
    $("#mainFrame").dragend("left");
  }


  $scope.tester = function(){
    alert("tetewzeu");
  }


  $scope.toggleDetails = function(){
    $('#NewsDetail').toggle("collapse");
    $('#stickerTest').css("border-radius", 0);
  }


  if($(window).width() < 768){
    $scope.toDetail = function(index){
      console.log("kdjshfhs");
        // $("#mainFrame").dragend("right");
      }

    // var toMain = function(){
    //   console.log("kjdsjfls");
    //   $("#mainFrame").dragend("right");
    // }


    $('#demo').dragend({
      onSwipeEnd : function(){
        var test = $('#demo').children('div:first-child').attr( "style" );
        var index = test.lastIndexOf('translateX(')+11;
        test = test.slice(index, -88);
        test = test.replace('px','');

        var number = parseInt(test, 10);
        if(number == 0){
          $('.indicatorDot').first().addClass('active');
          $('.indicatorDot').last().removeClass('active');
        }
        else{
          $('.indicatorDot').first().removeClass('active');
          $('.indicatorDot').last().addClass('active');
        }
      },
      disableScroll : true,
      afterInitialize : function(){
        $('.dragend-page').each(function(index){
          $(this).attr('id', 'page'+index);
        });
        $('.indicatorDot').first().addClass('active');
      }
    });



    var oBoxes = $('.ContentBox');
    var oFirstBox = oBoxes[0];
    var oLastBox = oBoxes[(oBoxes.length)-1];

    $(oLastBox).css('margin-bottom', '100px');
    $(oFirstBox).css('margin-top', '0px');
    var star = $(oFirstBox).children('div:first-child')
    .append("<i id='adminLogo' style='float: right;' class='glyphicon glyphicon-asterisk'></i>");
    star.click(function(){
      alert("test");
    });
    $compile(oFirstBox)($scope);






  }


}])
