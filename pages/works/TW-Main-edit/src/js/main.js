$(document).ready(function(){

	$('.home-slider').slick({
		arrows: false,
		dots: true
	});

	$('.open-menu__btn').on('click', function(){
		$('.header-page__nav').toggleClass('header-page__nav--open');
		$(this).toggleClass('open-menu--active')
	});



	
});

