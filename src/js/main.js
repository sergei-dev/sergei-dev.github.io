$(document).ready(function() {



    var wow = new WOW(
    {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
}
);
    wow.init();

    $(".nav__link").on("click", function(e) {
        e.preventDefault();
         $('.header-page__open-menu').removeClass('open-menu--active');
        $('.nav').removeClass('nav--open');
        var href = $(this).attr("href")
          , a = $(href);
        $("html, body").animate({
            scrollTop: a.offset().top
        }, 600)
    })


	$('.open-menu__btn').on('click', function() {
		$(this).parent().toggleClass('open-menu--active');
		$('.nav').toggleClass('nav--open');
	});

	$('.nav__item').each(function(e) {
		$(this).css('transition-delay', .3 + .1 * e + 's');
	});

    setTimeout(function() {
    	$(".preloader").hasClass("preloader--done") || $(".preloader").addClass("preloader--done");
   }, 900);

    setTimeout(function() {
     $('.top-sect__text-wrap--first .top-sect__start-letter').addClass('rotate-in');
 }, 600);

    setTimeout(function() {
        $('.top-sect__text-wrap--first .top-sect__start-letter').removeClass('rotate-in');
        $('.top-sect__text-wrap--first .top-sect__start-letter').addClass('rotate-out');
    }, 7000);

    setTimeout(function() {
        $('.top-sect__text-wrap--name .top-sect__start-letter').addClass('fade-in');
    }, 9000);

});