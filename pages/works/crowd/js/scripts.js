/* menu toggle button */
function toggleMainMenu(_this) {
	$(_this).toggleClass("opened");
	menuShowHide();
}

var menu;

/* показ/скрытие меню */
function menuShowHide(_duration){

	_duration = _duration || 300;


	menu = $(".js-menu");

	menu.slideToggle(_duration, function(){
		if (menu.is(":not(:visible)")) {
			menu.removeAttr("style");
		}
	});
}


/**
* обработка формы поиска
**/

$(".js-search-form").on("submit", function(){
	$(this).addClass("open");
	setTimeout(function(){
		$(".js-search-input").focus();
	}, 150);

	if ($(".js-search-input").val() == '') {
		return false;
	}
	
})

$(".js-search-input").on("blur", function(){
	if ($(this).val() == '') {
		$(".js-search-form").removeClass("open");
	}
})


/*
* slider of js-projects-box
*/
$('.js-projects-box').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	speed: 300,
	arrows: true, 
	dots: false,
	adaptiveHeight: false,
	centerMode: false,
	centerPadding: "50px",
	autoplay: true,
	autoplaySpeed: 8000, 
	responsive: [
	{
	  breakpoint: 1170,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 2,
	  }
	},
	{
	  breakpoint: 700,
	  settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
	  }
	},
	// You can unslick at a given breakpoint now by adding:
	// settings: "unslick"
	// instead of a settings object
  ]
});



function setMinHeight(selector, maxWidth) {
	var maxWidth = maxWidth || 0;

	if ($(window).outerWidth() < maxWidth) {
		$(selector).removeAttr('style');
		return false;
	}

	var compare_header_max = 0;

	$(selector).removeAttr('style').each(function(idx, el){
		if (compare_header_max < $(el).innerHeight()) {
			compare_header_max = $(el).innerHeight();
		}
	}).css({
		'min-height' : compare_header_max + "px"
	});

}

var isChanging = false;

$(function(){
	$(window).resize(function(){
		if (!isChanging) {
			executeOnLoad();
			isChanging = true;

			setTimeout(function(){
				executeOnLoad();
				isChanging = false;
			}, 500);
		}
	});
	executeOnLoad();
	
});

function executeOnLoad(){
	setMinHeight('.js-cart', 700);
}

$('.table-select').selectric();

$(".tab-content").not(":first").hide();
   $(".main-content-tabs__wrap-btn").click(function() {
     $(".main-content-tabs__wrap-btn").removeClass("btn-tab-active").eq($(this).index()).addClass("btn-tab-active");
     $(".tab-content").hide().eq($(this).index()).fadeIn()
   }).eq(0).addClass("btn-tab-active");

function tabs(tab_el,btn, btn__act) {
$(tab_el).not(":first").hide();
   $(btn).click(function() {
     $(btn).removeClass(btn__act).eq($(this).index()).addClass(btn__act);
     $(tab_el).hide().eq($(this).index()).show()
   }).eq(0).addClass(btn__act);
}

tabs('.create-project .tab-content','.create-project .main-content-tabs__wrap-btn', 'btn-tab-active');
tabs('.main-content-profile .tab-content','.main-content-profile .main-content-tabs__wrap-btn', 'btn-tab-active');
tabs('.project__tab-content','.project__tabs-btn', 'project-tab-active');




 
 var inputs = document.querySelectorAll('.inp-link');
 var inp_project = document.querySelectorAll('.create-project input');
 var text_project = document.querySelectorAll('.create-project textarea');

 function label_hide(input) {
	for (var i = 0; i < input.length; i++) {
		input[i].addEventListener('keyup', function(event) {
			if(event.target.value) {
				event.target.classList.add('label-hide');
			}
			else {
				event.target.classList.remove('label-hide');
			}
		});
		if(input[i].value) {
				input[i].classList.add('label-hide');
			}
			else {
				input[i].classList.remove('label-hide');
			}
	};
}

label_hide(inputs);
label_hide(inp_project);
label_hide(text_project);

$('.datetimepicker').datetimepicker({
 lang:'ru',
timepicker:false,
format:'d.m.Y',
});

function text_count(el) {
	$(el).on("input", function(e){
	var _this = $(this);
	var maxLen = _this.data("maxLen");

	_this.val(_this.val().slice(0, maxLen));
	$(".js-message-count").text(maxLen - _this.val().length);

	if (_this.val().length >= maxLen) {
		// если превышает лимит
		_this.val(_this.val().substr(0, maxLen));
	}
});
}

text_count('.js-message-textarea');
text_count('.js-message-input');