$(function() {

	$('.open-menu').on('click', function() {
			$('.nav').fadeToggle();
	});

	$(window).scroll(function() {
		if ( $(this).scrollTop() > 100 ) {
			$('.header-top').addClass('header-top--white');
		}

		else {
				$('.header-top').removeClass('header-top--white');
		}

	});

	$('.open-modal').click(function() {
		$('.page-modal').addClass('page-modal--open');
		$('.page-modal__overlay').fadeIn();
	})

		$('.page-modal__close').click(function() {
		$('.page-modal').removeClass('page-modal--open');
		$('.page-modal__overlay').fadeOut();
	})

		$('.page-modal__overlay').click(function() {
		$('.page-modal').removeClass('page-modal--open');
		$(this).fadeOut();
	})

	$('.about__slider').owlCarousel({
		navigation: false,
		pagination: false,
		autoPlay: false,
		stopOnHover: false,
		items: 3,
		itemsDesktop: [1200, 3],
		itemsDesktopSmall: [1199, 3],
		itemsTablet: [800, 2],
		itemsMobile: [700, 1],
		navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	});

	
	$('.nav').onePageNav({
		 scrollSpeed: 750,
     scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
     scrollOffset: 79, //Height of Navigation Bar
     currentClass: 'active'
   });


	 $('.page-form').submit(function(event) {
        event.preventDefault();
    });

	 $('.btn-submit').click(function() {

            $.ajax({
                url: '../mail.php',
                type: "POST",
                data: $('#form-one').serialize(),
                // Сеарилизуем объект
                success: function() {
                    //Данные отправлены успешно
                    $('#form-one').find('.succes-form').show();
                    $('#form-one')[0].reset();
                },

                error: function() {
                    $('#form-one').find('.error-block').show();
                }
            });
        
    });

    $('.btn-submit-modal').click(function() {
        $.ajax({
            url: '../mail.php',
            type: "POST",
            data: $('#form-modal').serialize(),
            // Сеарилизуем объект
            success: function() {
                //Данные отправлены успешно
                $('#form-modal').find('.succes-form').show();
                $('#form-modal')[0].reset();
            },

            error: function() {
                $('#form-modal').find('.error-block').show();
            }
        });
    });



});
