noobcorner.controller('HomeCtrl',function($scope, $compile){
  var x = $('.ContentBox')[0];
  $(x).css('margin-top', '20px');
  var star = $(x).children('div:first-child')
                 .append("<i id='adminLogo' style='float: right;' class='glyphicon glyphicon-asterisk'></i>");
  star.click(function(){
    alert("test");
  })
  $compile(x)($scope);
})
