smoothScroll.init();

function update() {
  var wB = $('.plan-bar').width();
  var wA = 0;

  var today = new Date(); //alert(today);
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  var d = Math.round((Date.parse(mm + " "+ dd + ", " + yyyy))/(1000*60*60*24));//alert(d);

  var hours = new Date().getHours();
  //var total_d = 50;
  //pos_rad = ((d)*24 + hours) / ((total_d)*24.00);
  var start_d = Math.round((Date.parse("March 22, 2017"))/(1000*60*60*24));
  var end_d = Math.round((Date.parse("March 25, 2019"))/(1000*60*60*24));
  var total_d = end_d - start_d;
  pos_rad = ((d - start_d)*24 + hours) / ((total_d)*24.00);

  xCoord = (wA) + wB*pos_rad;
  $(".gradient").css({ "width": xCoord });
  setTimeout(function(){ update(); }, 1000);
}
$(function(){
  // var today=new Date();
  // var dd = today.getDate();
  // var mm = today.getMonth()+1;
  // var yyyy = today.getFullYear();
  // if ( dd==14 && mm==8 && yyyy=2017) { //time to start gradient
  //   update();
  // }
  update();
});
jQuery(window).scroll(function(){
  var scroll = $(window).scrollTop();
  var test = document.getElementById("home");
  var offsetNav = test.offsetHeight;
  //alert(offsetNav);
  //var offsetNav = 300;
  if (scroll > offsetNav) {
    $('.navbar').addClass('bg-black');
    $('.top-logo').addClass('hidden');
  }
  else {
    $('.navbar').removeClass('bg-black');
    $('.top-logo').removeClass('hidden');
  }
});
$('ul.navbar-nav li').click(function() {
  $('ul.navbar-nav li').removeClass('active');
  $(this).addClass('active');
});
