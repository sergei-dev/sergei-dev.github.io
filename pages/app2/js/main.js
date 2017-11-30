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

