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

    $("a.scroll").click(function () { 
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').animate( { scrollTop: destination }, 1100 );
		return false;
	});
});