$(function() {

	 $(".anim-scroll").on("click", function(e) {
        e.preventDefault();
        var t = $(this).attr("href")
          , n = $(t);
        $("html, body").animate({
            scrollTop: n.offset().top
        }, 600)

        if (window.matchMedia("(max-width: 767px)").matches) {
        	$('.nav').hide();
        }

      });


	if (document.querySelector('.js-motion-line')) {
		var timer;
		$('.nav__item').hover(function() {
			animCircle(this);
            // clearTimeout(timer)
          }, function() {
          	let that = this;
          	setTimeout(animCircle($(that).parent().find('.nav__item.active')), 300);
          });

		$('.nav__list').find('.nav__item').eq(0).addClass('active');
        // $('.s_visas__doc-content').find('.js-tab').eq(0).trigger('click');


        // $('.js-tab').click(function() {
        //     animCircle(this);
        //     // clearTimeout(timer)
        // }, function() {
        //   console.log(document.querySelector('.js-tab.active'));
        //     setTimeout(animCircle(document.querySelector('.js-tab.active')), 300);
        // });
        function animCircle(that) {
          // console.log(that);
          var elem = $(that).find('a')[0];
            // console.log(elem);
            var top = elem.offsetTop;
            // console.log(top);
            var left = elem.offsetLeft;
            // console.log('top',top);
            // console.log('left',left);
            var destX = left;
            var destY = top + $(elem).height();
            var width = $(elem).width();
            // console.log(elem);
            // console.log(width);
            $('.js-motion-line').css({
            	left: destX,
            	width: width
            });
          }
          setTimeout(animCircle(document.querySelector('.nav__item.active')),100);
        }


        $(window).on('resize',function(){
        	animCircle(document.querySelector('.nav__item.active'));
        })

	$('.open-menu').on('click', function() {
			$('.nav').fadeToggle();
	});

	// $(window).scroll(function() {
	// 	if ( $(this).scrollTop() > 100 ) {
	// 		$('.header-top').addClass('header-top--white');
	// 	}

	// 	else {
	// 			$('.header-top').removeClass('header-top--white');
	// 	}

	// });

	// $('.open-modal').click(function() {
	// 	$('.page-modal').addClass('page-modal--open');
	// 	$('.page-modal__overlay').fadeIn();
	// })

	// 	$('.page-modal__close').click(function() {
	// 	$('.page-modal').removeClass('page-modal--open');
	// 	$('.page-modal__overlay').fadeOut();
	// })

	// 	$('.page-modal__overlay').click(function() {
	// 	$('.page-modal').removeClass('page-modal--open');
	// 	$(this).fadeOut();
	// })

	// $('.about__slider').owlCarousel({
	// 	navigation: false,
	// 	pagination: false,
	// 	autoPlay: false,
	// 	stopOnHover: false,
	// 	items: 3,
	// 	itemsDesktop: [1200, 3],
	// 	itemsDesktopSmall: [1199, 3],
	// 	itemsTablet: [800, 2],
	// 	itemsMobile: [700, 1],
	// 	navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	// });

	
	// $('.nav').onePageNav({
	// 	scrollSpeed: 750,
 //     scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
 //     scrollOffset: 79, //Height of Navigation Bar
 //     currentClass: 'active'
 //   });


	// $('.page-form').submit(function(event) {
	// 	event.preventDefault();
	// });

	// $('#form-one').find('button[type="submit"]').click(function() {

	// 		if ( $('#form-one').find('.page-form__input').val() == '') {
	// 			$('#form-one').find('.empty-form').show();

	// 		}	

	// 		else {
	// 			$.ajax({
	// 				url: '../mail.php',
	// 				type: "POST",
	// 				data: $('#form-one').serialize(),
 //                // Сеарилизуем объект
 //                success: function() {
 //                    //Данные отправлены успешно
 //                    $('#form-one').find('.succes-form').show();
 //                    $('#form-one').find('.empty-form').hide();
 //                    $('#form-one').find('.error-message').hide();
 //                    $('#form-one')[0].reset();
 //                  },

 //                  error: function() {
 //                  	$('#form-one').find('.error-message').show();
 //                  }
 //                });

				
	// 		}

		

		
			
		

	// });


	// $('#form-modal').find('button[type="submit"]').click(function() {


	// 		if ( $('#form-modal').find('.page-form__input').val() == '') {
	// 			$('#form-modal').find('.empty-form').show();

	// 		}	

	// 		else {
	// 			$.ajax({
	// 				url: '../mail.php',
	// 				type: "POST",
	// 				data: $('#form-modal').serialize(),
 //                // Сеарилизуем объект
 //                success: function() {
 //                    //Данные отправлены успешно
 //                    $('#form-modal').find('.succes-form').show();
 //                    $('#form-modal').find('.empty-form').hide();
 //                    $('#form-modal').find('.error-message').hide();
 //                    $('#form-modal')[0].reset();
 //                  },

 //                  error: function() {
 //                  	$('#form-modal').find('.error-message').show();
 //                  }
 //                });

				
	// 		}

		

		
			
		

	// });

 //    // $('.btn-submit-modal').click(function() {

 //    // 	if ( $('#form-modal .page-form__input').val() !== '' ) {

 //    // 			  $.ajax({
 //    //         url: '../mail.php',
 //    //         type: "POST",
 //    //         data: $('#form-modal').serialize(),
 //    //         // Сеарилизуем объект
 //    //         success: function() {
 //    //             //Данные отправлены успешно
 //    //             $('#form-modal').find('.succes-form').show();
 //    //             $('#form-modal')[0].reset();
 //    //         },

 //    //         error: function() {
 //    //             $('#form-modal').find('.error-block').show();
 //    //         }
 //    //     });

 //    // 	}
 
 //    // });



});
