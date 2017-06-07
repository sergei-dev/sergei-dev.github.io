$(document).ready(function(){
 $('.slider').slick({
  slidesToShow: 3,
   infinite: true,
  slidesToScroll: 2,
  dots: false,
  arrow: true,
  centerMode: false,
  centerPadding: '50px',
   responsive: [
    {
      breakpoint: 1100,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 840,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        dots: true,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }

  ]
  
  });
 $('.second_slider').slick({
  slidesToShow: 2,
   infinite: true,
  slidesToScroll: 2,
  dots: false,
  arrow: true,
  centerMode: false,
  centerPadding: '50px',
   responsive: [
    {
      breakpoint: 1100,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 1100,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 630,
      settings: {
        arrows: false,
        dots: true,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  
  });
 $('.slider_three_reviews').slick({
  slidesToShow: 1,
   infinite: true,
  slidesToScroll: 1,
  dots: false,
  arrow: true,
  centerMode:false,
  centerPadding: '50px',
   responsive: [
    {
      breakpoint: 915,
      settings: {
        arrows: false,
        dots: true,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 560,
      settings: {
        arrows: false,
        dots: true,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
  ]
  
  });



var modal = $('#myModal'); 
var btn = $('.button_header_top'); 
var span = $('.close_link'); 
var button_header = $('.header_button');
var red_button = $('.button_slider_red');
var menu_modal_ = $('.modal_menu');
var link_button_menu = $('.menu_link_button');





function modal_window(buttons) {
buttons.click(function(event){ 
event.preventDefault();
modal.fadeIn();
$('.container_modal').fadeIn();
$('.modal_content').addClass('active');


 


}); 
span.click(function(event){ 
event.preventDefault();
modal.fadeOut();
$('.modal_content').removeClass('active');
}); 

modal.click(function(){ 

$(this).fadeOut();
$('.modal_content').removeClass('active');


});
}



modal_window(btn);
modal_window(button_header);
modal_window(red_button);

 link_button_menu.click(function(){
       menu_modal_.toggleClass('modal_menu_active');
       $('.span_link').toggleClass('span_link_active');
       $('.span_link_two ').toggleClass('span_link_active');
       $('.span_link_three ').toggleClass('span_link_active');

 });
 $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
     var target = $(this).attr('href'),
     bl_top = $(target).offset().top;
     $('body, html').animate({scrollTop: bl_top }, 700)
     return false;

 });
 
});