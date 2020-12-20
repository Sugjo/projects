$(document).ready(function() {
	var offsettop = $('nav').offset().top;
	if (offsettop > 50) {
		$('nav').addClass('nav-scroll');
	} else {
		$('nav').removeClass('nav-scroll');
	}

	$(window).bind('scroll', function () {
		if ($(window).scrollTop() > 1) {
			$('nav').addClass('nav-scroll');
		} else {
			$('nav').removeClass('nav-scroll');
		}
    });
});