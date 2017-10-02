$(document).ready(function() {
  $('.menu_link').on('click', function() {
    $('.nav_mobile').slideToggle();
  });

  $(".tabs_body").not(":first").hide();
  $(".button_controlls").click(function() {
    $(".button_controlls").removeClass("button_controlls_active").eq($(this).index()).addClass("button_controlls_active");
    $(".tabs_body").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("button_controlls_active");

  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 3
      },
      1200: {
        items: 6
      }
    }
  });

  $('.phone_popup').magnificPopup({
    items: {
      src: '.fon'
    },
    type: 'inline'
  });

  $('.bron_popup').magnificPopup({
    items: {
      src: '.fon_bron'
    },
    type: 'inline',
    midClick: true
  });
  $('.slide').magnificPopup({
    type: 'image'
  });
  $('select').selectric();
  $('.selectric-wrapper').append('<i class="fa fa-angle-down" aria-hidden="true"></i>');
  $(".date_child").mask("99/99/9999",{placeholder:"ДД/ММ/ГГГГ"});
  $(".phone_input").mask("+7(999) 999-9999");
});
