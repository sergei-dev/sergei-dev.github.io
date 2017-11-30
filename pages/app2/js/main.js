$(document).ready(function() {
	 $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
            $('header').addClass('header_fixed');
           
            
        }
        if ($(this).scrollTop() < 50 && $('header').hasClass('header_fixed')) {
            $('header').removeClass('header_fixed');
           

        }
    });
	 $('.popup_link').magnificPopup({
    items: {
      src: '.popup_window'
    },
    type: 'inline'
  });
})
$(document).ready(function() {

  new WOW().init();
  $('.mob').click(function() {
    $('.navbar').slideToggle();
  });
   

    $('.navbar a').on('click', function(e) {
        e.preventDefault();
        var selector = $(this).attr('href');
        var h = $(selector);
        $('html, body').animate({
            scrollTop: h.offset().top
        }, 600);
    });
    $('.nav_mob a').on('click', function(e) {
        e.preventDefault();
        var selector = $(this).attr('href');
        var h = $(selector);
        $('html, body').animate({
            scrollTop: h.offset().top
        }, 600);
    });



  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    dots: true,
    navText: ["<img src='img/letf_arrow.png'>", "<img src='img/right_arrow.png'>"],
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      1200: {
        items: 1
      }
    }
  });

  $('.popup_youtube').magnificPopup({ 
    type: 'iframe' 
 });