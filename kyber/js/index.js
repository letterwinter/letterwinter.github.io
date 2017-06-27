wow = new WOW ({
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
})
wow.init();
$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  var offsetNav = $('nav.navbar').offsetHeight();
  if (scroll > offsetNav) {
    $('.navbar').addClass('bg-black');
    $('.logo-top').addClass('hidden');
  }
  else {
    $('.navbar').removeClass('bg-black');
    $('.logo-top').removeClass('hidden');
  }
});
$('ul.navbar-nav li').click(function() {
  $('ul.navbar-nav li').removeClass('active');
  $(this).addClass('active');
});
smoothScroll.init();
