$(function() {

	if ($('.js-simple-slider')) {
		$('.js-simple-slider').slick({
			lazyLoad: 'ondemand',
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true, 
			dots: true,
		});
	}

	if ($('.js-popup-open')) {
		$('.js-popup-open').on('click', function(e) {
			e.preventDefault();
			$('body').addClass('body-overflow');
			$('.popup--registr[data-popup="' + $(this).data('popup') + '"]').fadeIn();
		});
	}

	// btn open popup

	if ($('.js-popup-close')) {
		$('.js-popup-close').on('click', (e) => {
			e.preventDefault();
			$('body').removeClass('body-overflow');
			$('.popup').fadeOut();
		});
	}

	// btn close popup

	   $('.popup').mouseup(function(e) {
        const content = $('.popup__content');
        if (!content.is(e.target) && content.has(e.target).length === 0) {
            $('.popup').fadeOut();
            $('body').removeClass('body-overflow');
        }
    });

	   // bg close popup


	if ($('.js-scroll')) {
		$('.js-scroll').on('click', function(event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body, html').animate({scrollTop: top}, 1500);
		});
	}

});
