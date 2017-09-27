$(function() {
  $('select').selectric();
  $('.selectric-wrapper').append('<i class="fa fa-angle-down" aria-hidden="true"></i>');

  $('.button_menu_link').click(function(e) {
    e.preventDefault();
    $('.mob_nav').slideToggle();
  });

  $('.drop').on('click', function() {
    $('.drop_wrapper').slideToggle();
  });

  $('.made_in .up').on('click', function() {
    var selector = $(this).attr('href');
    var h = $(selector);
    $('html, body').animate({
      scrollTop: h.offset().top
    }, 600);
  });

  var uiSlider = document.getElementById('slider');
  var snapValues = [
    document.getElementById('slider-snap-value-lower'),
    document.getElementById('slider-snap-value-upper')
  ];

  noUiSlider.create(uiSlider, {
    start: [3000, 8700],
    connect: true,
    range: {
      'min': [200],
      'max': [2000]
    }
  });

  uiSlider.noUiSlider.on('update', function(values, handle) {
    snapValues[handle].innerHTML = values[handle];
  });




});
