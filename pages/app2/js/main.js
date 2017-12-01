$(document).ready(function() {
	ymaps.ready(init);
    var myMap,
    myPlacemark;;

    function init(){     
        myMap = new ymaps.Map("Map", {
            center: [59.9328,30.4179],
            zoom: 16
        });
        myPlacemark = new ymaps.Placemark([59.9328,30.4179],
         { hintContent: 'Финвал', balloonContent: 'Компания' });
        myMap.geoObjects.add(myPlacemark);
    }

	 $('.nav nav a').on('click', function(e) {
    var selector = $(this).attr('href');
    var h = $(selector);
    $('html, body').animate({
      scrollTop: h.offset().top
    }, 600);

  });

	 $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
            $('header').addClass('header_fixed');
           
            
        }
        if ($(this).scrollTop() < 50 && $('header').hasClass('header_fixed')) {
            $('header').removeClass('header_fixed');
           

        }
    });
	 $('.popup_link').magnificPopup({
    items: {
      src: '.popup_window'
    },
    type: 'inline'
  });

});

