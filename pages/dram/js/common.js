$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});



	
	


    $('.btn-toggle-menu').click(function(event) {
    	event.preventDefault();
    	$('.btn-toggle-menu').toggleClass('btn-toggle-menu-active');
    });

    $('ф').on('click', fuc);

    $('.link-progects').click(function(event) {
    	event.preventDefault();
    	$('.progects').toggleClass('is-show');
    });

    $('.exchange-rates').click(function(event) {
    	event.preventDefault();
    	$('.exchange-currencies-sub_menu').toggleClass('is-show');
    });

    $('.btn-toggle-menu').click(function() {
    	$('.categories-list').toggleClass('is-show');
    	$('.notification').toggleClass('open-wind');
    });

     $('.new-notification').click(function() {
    	$('.notifi-list').toggleClass('is-show');
    	$('.notification').toggleClass('open-wind');
    });

     $('.header-top_line_nav a').click(function() {
     		$('.header-top_line_nav a').removeClass('header-top_line_nav_active_link');
     		$(this).addClass('header-top_line_nav_active_link');
     });

     $('.converter-items li').click(function() {
     		$('.converter-items li').removeClass('converter-list-active');
     		$(this).addClass('converter-list-active');
     })

    $('.nofification-beta-test a').click(function() {
    	$('.nofification-beta-test').hide();
    })



	


});
