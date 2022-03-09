$(document).ready(function () {
	$("body > header > a").click(function () {
		$('html, body').animate({
			scrollTop: $("main").offset().top
		}, 1000);
	});
});