$(document).ready(function(){



	$(".top").on('click', function() {
		$("nav.menu").toggleClass("menu_show");
	});

	$(".textBox").hover(function() {
		$(".textBox").toggleClass("text_show");
	});
});