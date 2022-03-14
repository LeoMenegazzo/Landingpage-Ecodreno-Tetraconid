$(document).ready(function() {

	$(".wq-banner-carousel").owlCarousel({
		items:1,
		nav: false,
		autoplay:true,
		loop:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		smartSpeed:1000,
		navText:false
		// navText: [ '<span class="flaticon-arrow-left"></span>', '<span class="flaticon-arrow-right"></span>' ],
	});
	$(".wq-produto_aplicado-carrousel").owlCarousel({
		items:1,
		nav: false,
		autoplay:true,
		loop:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		smartSpeed:1000,
		navText:false
		// navText: [ '<span class="flaticon-arrow-left"></span>', '<span class="flaticon-arrow-right"></span>' ],
	});

	$(".wq-carousel_depoimentos").owlCarousel({
		items:1,
		loop:true,
		margin: 50,
		nav: false,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
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
		loop:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
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

	$(".wq-galeria_carousel").owlCarousel({
		items: 3,
		loop:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		margin:0,
		nav: false,
		navText:false,
		responsiveClass:true,
		smartSpeed:1000,
		responsive:{
			0:{
				items: 1
			},
			500:{
				items: 2
			},
			750:{
				items: 3
			},
			1000:{
				items: 4
			},
		}
	});

	$(".wq-carousel-marcas").owlCarousel({
		items:3,
		loop:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
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

	$(".wq-carousel_portfolio").owlCarousel({
		items: 1,
		nav: false,
		navText: false,
		smartSpeed: 750,
		autoplay: true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		loop:true
	});


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  $(".wq-projetos-iterno-carousel").owlCarousel({
		items: 1,
		nav: false,
		navText: false,
		smartSpeed: 750,
		autoplay: true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		loop:true
	});



});
