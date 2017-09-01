$(document).ready(function() {
	 $('.nav_link').on('click', function(e) {
            e.preventDefault();
            $('.nav_mobile').toggleClass('active_menu');
        });

	 $('.nav_menu a').on('click', function(e) {
            var selector = $(this).attr('href');
            var h = $(selector);
            $('html, body').animate({
                scrollTop: h.offset().top
            }, 600);

        });

	 $('.mob_nav a').on('click', function(e) {
            var selector = $(this).attr('href');
            var h = $(selector);
            $('html, body').animate({
                scrollTop: h.offset().top
            }, 600);
            $('.nav_mobile').removeClass('active_menu');
        });

		
	
	

	$('.button_order').on('click', function(e) {
		e.preventDefault();
		$('.modal_bg').fadeIn();
		$('.modal_form').fadeIn();
	});
	

	

	$('.modal_bg, .close_form').on('click', function(e) {
		e.preventDefault();
		$('.modal_form').fadeOut();
		$('.modal_bg').fadeOut();

	});
	

		$('.owl-carousel').owlCarousel({
			loop: true,
			autoplay: true,
			autoplayTimeout: 1000, 
			autoplayHoverPause: true,
			margin:30,
			nav: true,
			dots: false,
			navigationText : ["",""],
			responsive:{
        		0:{
            		items:1
        		},
        		500:{
            		items:2
        		},
        		991:{
            		items:3
        		},
        		2000:{
            		items:4
        		}
    		}

    	});

    	$('.tel_form').mask("+7 (999)-999-99-99");
		
});