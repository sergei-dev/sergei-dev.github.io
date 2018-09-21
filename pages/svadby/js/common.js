$(function() {

	$("#form").submit(function() {
		var data = $(this).serialize(); 
		$.ajax({
			type: "POST",
			url: "send.php", 
			data: data,
			success: function(data){
				$(".succes").show();
				$("#form").hide();
			},
			error: function() {
				$(".error").show();
			}
		});
	});

	$('.btn-mob-toggle').click(function() {
		$('.header-top').toggleClass('navbar-active');
	});

	$('.header-top_navbar_list a').click(function(event) {
		event.preventDefault();
		var id = $(this).attr('href');
		var top = $(id).offset().top;
		$('body, html').animate({
			scrollTop: top
		}, 1000);
	});


});


	
	

