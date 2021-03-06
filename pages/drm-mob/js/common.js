$(function() {

	$('.hamburger').click(function() {
		$(this).toggleClass('is-active');
	});

	$('select').selectric();

	$('.link-submenu').click(function(e) {
		e.preventDefault();
		$('.nav-list-submenu').slideToggle();
		$(this).toggleClass('submenu-active-fa');
	});

	$('.hamburger-box').click(function(e) {
		$('.mob-navigation').slideToggle();
	});

	$('.link-catg').click(function(e) {
		e.preventDefault();
		$(this).addClass('link-open-active');
		$('.page-overlay').fadeIn();
		$('.list-categories').fadeIn();
	});

	$('.close-slider').click(function(e) {
		e.preventDefault();
		$('.link-catg').removeClass('link-open-active');
		$('.page-overlay').fadeOut();
		$('.list-categories').fadeOut();
	});

	$('.site-navigation-fixed ul li a').click(function(e) {
		e.preventDefault();
		$('.site-navigation-fixed ul li a').removeClass('site-navigation-fixed-active');
		$(this).addClass('site-navigation-fixed-active');
	});

	$('.owl-carousel').owlCarousel({
		loop: true,
		autoplay: false,
		autoplayTimeout: 1000,
		autoplayHoverPause: true,
		margin:30,
		nav: true,
		dots: true,
		navText : ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
		responsive:{
			0:{
				items:1
			},
			500:{
				items:1
			},
			991:{
				items:1
			},
			2000:{
				items:1
			}
		}
	});

});
