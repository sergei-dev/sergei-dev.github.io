$('.slick-main-container').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slick-miniatures-container'
});
$('.slick-miniatures-container').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slick-main-container',
  dots: false,
  arrows: false,
  centerMode: true,
  vertical: true,
  verticalSwiping: true,
  centerPadding: '0',
  focusOnSelect: true,
   responsive: [
    {
      breakpoint: 991,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    },
    {
      breakpoint: 480,
      settings: {
      }
    }
  ]
});