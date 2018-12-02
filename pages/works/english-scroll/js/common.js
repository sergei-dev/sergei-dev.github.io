$(function() {

	$('.reviews-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		 responsive: [
    {
      breakpoint: 991,
      settings: {
       arrows: false
      }
    }
  ]
	});

	$(".anim-scroll").on("click", function(e) {
        e.preventDefault();
        var t = $(this).attr("href"), 
        n = $(t);
        $("html, body").animate({
            scrollTop: n.offset().top
        }, 600)
    }),

	$('input[type="tel"]').mask("+7(999) 999 9999");

	$('.open-popup').on('click', function() {
		$('.page-modal--callback').addClass('page-modal--show').find('.page-modal__content').addClass('page-modal__content--show');
	});

	$('.open-policy').on('click', function() {
		$('.page-modal--policy').addClass('page-modal--show').find('.page-modal__content').addClass('page-modal__content--show');
	});

	$('.page-modal__overlay').on('click', function() {
		$(this).parent().find('.page-modal__content').removeClass('page-modal__content--show');
		$(this).parent('.page-modal').removeClass('page-modal--show');
	});

	$('.page-modal__close-btn').on('click', function() {
		$(this).closest('.page-modal').find('.page-modal__content').removeClass('page-modal__content--show');
		$(this).closest('.page-modal').removeClass('page-modal--show');
	});

	$('.open-menu').on('click', function() {
		$(this).toggleClass('open-menu--active');
		$('.nav').toggleClass('nav--open');
	});

	$(window).scroll(function() {
		50 < $(this).scrollTop() ? $(".scroll-up").fadeIn() : $(".scroll-up").fadeOut();
	});

	$(".scroll-up").on("click", function(e) {
		$(this).hide();
		$("body, html").animate({
			scrollTop: 0
		}, 500);
	});


	$('.form-page').submit(function(event) {
		event.preventDefault();
	});

	$('.btn-submit').click(function() {
		if ( $('#check-policy').prop('checked') == true ) {

			$.ajax({
				url: '../mail.php',
				type:     "POST",
        data: $('#form-one').serialize(),  // Сеарилизуем объект
        success: function() { //Данные отправлены успешно
        	$('#form-one').find('.succes-text').show();
        	$('#form-one')[0].reset();
        },

        error: function() {
        	$('#form-one').find('.error-text').show();
        }
      });
		}	
	});

	$('.btn-submit-modal').click(function() {
		$.ajax({
			url: '../mail.php',
			type:     "POST",
        data: $('#form-modal').serialize(),  // Сеарилизуем объект
        success: function() { //Данные отправлены успешно
        	$('#form-modal').find('.succes-text').show();
        	$('#form-modal')[0].reset();
        },

        error: function() {
        	$('#form-modal').find('.error-text').show();
        }
      });
	});

});
