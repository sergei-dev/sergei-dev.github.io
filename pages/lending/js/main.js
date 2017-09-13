$(document).ready(function() {
  $('.link_portfolio').click(function(e) {
    e.preventDefault();
  });
  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })

  $('.js-counter').counterUp({
    delay: 30,
    time: 5000
  });
  $('.nav_menu li a').hover(function() {
    $(this).toggleClass('nav_line_one');
    $(this).toggleClass('nav_line_two');


  });

  var selector = $(this).attr('data-filter');
  $('.grid').isotope({
    filter: selector,
    itemSelector: '.grid-item',
    masonry: {
      itemSelector: '.grid-item',
      columnWidth: 250,
      gutter: 20
    }
  });

  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 250,
    gutter: 20
  });


  $('.link_portfolio').click(function() {
    $('.link_portfolio').removeClass('link_portfolio_active link_portfolio_offset');
    $(this).addClass('link_portfolio_active link_portfolio_offset');

    var selector = $(this).attr('data-filter');
    $('.grid').isotope({
      filter: selector,
      itemSelector: '.grid-item',
      masonry: {
        itemSelector: '.grid-item',
        columnWidth: 250,
        gutter: 20
      }
    });


  });

  $('.select_form').selectric();

  $('.menu_link_button').on('click', function(e) {
    e.preventDefault();
    $('.modal_menu').slideToggle();
  });




  $('.nav_menu li a').on('click', function(e) {
    var selector = $(this).attr('href');
    var h = $(selector);
    $('html, body').animate({
      scrollTop: h.offset().top
    }, 600);

  });
  $('.mob_nav li a').on('click', function(e) {
    var selector = $(this).attr('href');
    var h = $(selector);
    $('html, body').animate({
      scrollTop: h.offset().top
    }, 600);
    $('.modal_menu').fadeOut();
  });

  var menu_selector = ".menu_aside"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.

  function onScroll() {
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function() {
      var hash = $(this).attr("href");
      var target = $(hash);
      if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
        $(menu_selector + " a.nav_active_line").removeClass("nav_active_line");
        $(this).addClass("nav_active_line");
      } else {
        $(this).removeClass("nav_active_line");
      }
    });
  }

  $(document).ready(function() {
    jQuery("a").click(function() {

      var elementClick = jQuery(this).attr("href");
      var destination = jQuery(elementClick).offset().top;
      jQuery("html, body").animate({
        scrollTop: destination
      }, 500);


      return false;


    });
    $(document).on("scroll", onScroll);

    $("a[href^=#]").click(function(e) {
      e.preventDefault();

      $(document).off("scroll");
      $(menu_selector + " a.active").removeClass("active");
      $(this).addClass("active");
      var hash = $(this).attr("href");
      var target = $(hash);

      $("html, body").animate({
        scrollTop: target.offset().top
      }, 500, function() {
        window.location.hash = hash;
        $(document).on("scroll", onScroll);
      });

    });

  });

  $('#form').validate({
    rules: {
      name: {
        required: true,
        minlength: 6,
        maxlength: 30
      },
      email: {
        required: true,
        minlength: 6,
        maxlength: 30
      },
      message: {
        required: true,
        minlength: 60,
        maxlength: 200
      }
    },
    messages: {
      name: {
        required: "Поле 'Имя' обязательно к заполнению",
        minlength: "Введите не менее 6-х символов в поле 'Имя'",
        maxlength: "Превышена длина символов"
      },
      email: {
        required: "Поле 'Email' обязательно к заполнению",
        email: "Необходим формат адреса email",
        minlength: "Введите не менее 6-х символов в поле 'Email'",
        maxlength: "Превышена длина символов"
      },
      message: {
        required: "Поле 'Сообщение' обязательно к заполнению",
        minlength: "Введите не менее 60-х символов в поле 'Сообщение'",
        maxlength: "Превышена длина символов"
      }
    }
  });



});
