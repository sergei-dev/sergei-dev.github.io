$(function() {
  $('select').selectric();
  $('.selectric-wrapper').append('<i class="fa fa-angle-down" aria-hidden="true"></i>');

  $('.button_menu_link').click(function(e) {
    e.preventDefault();
    $('.mob_nav').slideToggle();
  });

  $('.made_in .up').on('click', function() {
    var selector = $(this).attr('href');
    var h = $(selector);
    $('html,body').animate({
      scrollTop: h.offset().top
    }, 600);
  });

  var slider = document.getElementById('slider');

  noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
      'min': 0,
      'max': 100
    }
  });


});
