$(function() {

	let header = $("#header"),
		intro = $("#intro"),
		introH = intro.innerHeight(),
		scrollPos = $(window).scrollTop(),
		nav = $("#nav"),
		navToggle = $("#navToggle"),
		slider = $("#reviewsSlider"); // Slick slider

	/* Fixed header */
	$(window).on("scroll load resize", function(){
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();
		(scrollPos >= introH) ? 
			header.addClass("fixed") : header.removeClass("fixed");
	});

	/* Smooth scroll */
	$("[data-scroll]").on("click", function(event){
		let elementID = $(this).data('scroll'),
			elementOffset = $(elementID).offset().top;
		event.preventDefault();
		nav.removeClass('show');
		$("html, body").animate({
			scrollTop: elementOffset - 60
		}, 500);
	});

	/* Nav Toggle */
	navToggle.on("click", function(event){
		event.preventDefault();
		nav.toggleClass("show");
	});

	/* Reviews */
	slider.slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  arrows: false,
	  dots: true
	});

});