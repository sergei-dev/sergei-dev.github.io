$(function () {

	if (window.matchMedia("(min-width: 992px)").matches) {
		$(window).mousemove(function (e) {
			$(".js-parallax").each(function (i, item) {
				let coordX = e.clientX,
					coordY = e.clientY,
					resultX = 0 + (coordX *= $(item).data('depth')) / 70,
					resultY = 0 + (coordY *= $(item).data('depth')) / 70;
				$(item).css({
					transform: "translateX(" + resultX + "px) translateY(" + resultY + "px)"
				})
			})
		})
	}

});