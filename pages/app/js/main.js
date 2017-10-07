$(document).ready(function() {

  $('.nav_mobile').slideAndSwipe();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.header').addClass('header_scroll');
    }
    if ($(this).scrollTop() < 50 && $('.header').hasClass('header_scroll')) {
      $('.header').removeClass('header_scroll');
    }
  });

  $('nav a').on('click', function(e) {
    e.preventDefault();
    var selector = $(this).attr('href');
    var h = $(selector);
    $('body, html').animate({
      scrollTop: h.offset().top
    }, 800);
  });
  $('.nav_mobile a').on('click', function(e) {
    e.preventDefault();
    var selector = $(this).attr('href');
    var h = $(selector);
    $('body, html').animate({
      scrollTop: h.offset().top
    }, 800);
  });


  $('.pop').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});


  $(".tabs_body").not(":first").hide();
  $(".button_controlls").click(function() {
    $(".button_controlls").removeClass("button_controlls_active").eq($(this).index()).addClass("button_controlls_active");
    $(".tabs_body").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("button_controlls_active");





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

  $('.photoGallery .owl-carousel').owlCarousel({
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

  $('.slider_cont > .owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      1200: {
        items: 1
      }
    }
  });

  $('select').selectric();
  $('.selectric-wrapper').append('<i class="fa fa-angle-down" aria-hidden="true"></i>');
  $(".date_child").mask("99/99/9999", {
    placeholder: "ДД/ММ/ГГГГ"
  });
  $(".phone_input").mask("+7(999) 999-9999");


  $(".reviews .review:first-child").addClass("active");

  var activeReview = $(".reviews .review.active");
  var scale = 0.764;
  var mobileOffset = 153 - parseInt($(".testimonials .reviews-block .review .person .picture").css("width"));
  var marginLeft = parseInt($(".testimonials .reviews-block").css("width")) - 110;
  activeReview.find(".text").fadeIn(300).css("display",
    "inline-block");
  activeReview.find(".name").fadeIn(300);
  transform(activeReview.find(".person .picture"), marginLeft, 0, 1, true);
  calculatePosition(activeReview, false);

  $(".reviews .review").click(
    function() {
      switchReview($(this));
    });

  $(".reviews-block .page-content-nav .left").click(function() {
    if (activeReview.prev().length) {
      switchReview(activeReview.prev());
    }
  });
  $(".reviews-block .page-content-nav .right").click(function() {
    if (activeReview.next().length) {
      switchReview(activeReview.next());
    }
  });

  $(".testimonials").on("swipeleft", function() {
    var next = activeReview.next(".review");
    if (next.length > 0) {
      switchReview(next);
    }
  });
  $(".testimonials").on("swiperight", function() {
    var previous = activeReview.prev(".review");
    if (previous.length > 0) {
      switchReview(previous);
    }
  });

  function switchReview(elem) {
    if (!elem.hasClass("active")) {
      var previousActive = activeReview;
      activeReview.find(".text").fadeOut(300);
      activeReview.find(".name").fadeOut(300);
      activeReview = elem;
      previousActive.removeClass("active");

      calculatePosition(activeReview, true);
      transform(activeReview
        .find(".person .picture"), marginLeft, 0, 1,
        true);
      activeReview.addClass("active");
      activeReview.find(".text").fadeIn(300).css(
        "display", "inline-block");
      activeReview.find(".name").fadeIn(300);

    }
  }

  function calculatePosition(review, animate) {
    var previous = review.prev(".review");
    var next = review.next(".review");

    var previousPosition = -180 + mobileOffset;
    var nextPosition = 190 - mobileOffset + marginLeft;

    while (previous.length > 0) {
      var previousPhoto = previous.find(".person .picture");
      transform(previousPhoto, previousPosition, 0,
        scale, animate);
      previousPosition = previousPosition - 180 + mobileOffset;
      previous = previous.prev(".review");
    }

    while (next.length > 0) {
      var nextPhoto = next.find(".person .picture");
      transform(nextPhoto, nextPosition, 0, scale,
        animate);
      nextPosition = nextPosition + 170 - mobileOffset;
      next = next.next(".review");
    }
  }

  function transformActive(activeReview, previousActive) {
    var activeReviewPhoto = activeReview
      .find(".person .picture");
    var previousActivePhoto = previousActive
      .find(".person .picture");
    if ($(".review").index(activeReview) > $(".review")
      .index(previousActive)) {
      transform(activeReviewPhoto, -70 + mobileOffset, 0, 1, true);
      transform(previousActivePhoto, -595 + mobileOffset, 0, scale, true);
    } else {
      transform(activeReviewPhoto, 440 - mobileOffset, 0, 1, true);
      transform(previousActivePhoto, -190 - mobileOffset, 0, scale, true);
    }
  }

  function transform(elem, x, y, scale, animate) {
    if (scale != null && scale > -1) {
      scale = 'scale(' + scale + ')'
    } else {
      scale = '';
    }
    var css = {
      '-ms-transform': 'translate(' + x + 'px,' + y +
        'px)' + scale,
      '-webkit-transform': 'translate(' + x + 'px,' + y +
        'px)' + scale,
      'transform': 'translate(' + x + 'px,' + y + 'px)' +
        scale
    };
    elem.css(css);
  }

  //
});
