$(document).ready(function() {

	$(".wq-banner-carousel").owlCarousel({
		items:1,
		nav: false,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		smartSpeed:1000,
		navText:false
		// navText: [ '<span class="flaticon-arrow-left"></span>', '<span class="flaticon-arrow-right"></span>' ],
	});

	$(".wq-carousel_depoimentos").owlCarousel({
		items:1,
		loop:false,
		margin: 50,
		nav: false,
		navText:false,
		responsiveClass:true,
		smartSpeed:1000,
		responsive:{
			0:{
				items:1
			},
			500:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	$(".wq-projetos_carousel").owlCarousel({
		items:3,
		loop:false,
		margin:0,
		nav: false,
		navText:false,
		responsiveClass:true,
		smartSpeed:1000,
		responsive:{
			0:{
				items:1
			},
			500:{
				items:2
			},
			1000:{
				items:3
			},
			1600:{
				items:4
			}
		}
	});
	$(".wq-carousel-marcas").owlCarousel({
		items:3,
		loop:false,
		margin:30,
		nav: false,
		navText:false,
		responsiveClass:true,
		smartSpeed:750,
		responsive:{
			0:{
				items:1
			},
			500:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});



});
