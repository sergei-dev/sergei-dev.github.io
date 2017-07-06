$(document).ready(function() {
    $(window).scroll(function(){ 
if($(this).scrollTop() > 50){ 
$('.header_top_line').addClass('scroll_header_top_line'); 
} 
if($(this).scrollTop() < 50 && $('.header_top_line').hasClass('scroll_header_top_line')){ 
$('.header_top_line').removeClass('scroll_header_top_line'); 
} 
});

$('.modal_menu a').on('click', function(e) { 
e.preventDefault(); 
var selector = $(this).attr('href'); 
var h = $(selector); 
$('body').animate({ 
scrollTop: h.offset().top 
}, 800); 
});



$('.menu_link_button').on('click',function(event){
	 event.preventDefault();
	    $('.modal_menu').toggleClass('modal_menu_active');
       $('.span_link').toggleClass('span_link_active');
       $('.span_link_two').toggleClass('one_link_active');
          $('.span_link_three').toggleClass('two_link_active');
      });

 new WOW().init();

});