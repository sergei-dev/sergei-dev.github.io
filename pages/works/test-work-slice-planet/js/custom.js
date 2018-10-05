$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	
	/* components */
	
	/*
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	
	
	*/
	
	/* components */

	if($('.categories-list--scroll').length) {
		$(".categories-list--scroll").mCustomScrollbar({
			axis:"y",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};

	if($('.page-select').length) {
		$('.page-select').styler();
	};

	$('.page-filter__content--open').on('click', function() {
		$(this).next('.categories-list').slideToggle();
		$(this).find('.page-filter__ico').toggleClass('page-filter__ico--down');
	})

	if($('.product-slider').length) {
		$('.product-slider').slick({
			dots: true,
			infinite: false,
			autoPlay: true,
			speed: 500,
			arrow: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			variableWidth: true,
			responsive: [
			{
				breakpoint: 1166,
				settings: {
					variableWidth: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					variableWidth: false,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 472,
				settings: {
					variableWidth: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			]
		});
	};

	if($('.slick-dots').length) {
		$('.product-slider').append('<div class="product-slider__wrap-dots"></div>'); 
		if ($('.product-slider__wrap-dots').length) {
			$('.product-slider__wrap-dots').prepend($('.slick-prev'));
			$('.product-slider__wrap-dots').append($('.slick-dots'));
			$('.product-slider__wrap-dots').append($('.slick-next'));
		}
	}
	

	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);



