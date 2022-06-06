(function ($) {
	
	"use strict";

	// WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW ({
                boxClass:     'wow',      // Animated element css class (default is wow)
                animateClass: 'animated', // Animation css class (default is animated)
                offset:       20,         // Distance to the element when triggering the animation (default is 0)
                mobile:       true,       // Trigger animations on mobile devices (default is true)
                live:         true,       // Act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
    });

	$('.owl-testimonials').owlCarousel({
		items:1,
		loop:true,
		dots: true,
		nav: false,
		autoplay: true,
		margin:30,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:1
			  },
			  1000:{
				  items:1
			  }
		  }
	  })

	$('.owl-features').owlCarousel({
		items:3,
		loop:true,
		dots: true,
		nav: true,
		autoplay: true,
		margin:30,
		  responsive:{
			  0:{
				  items:1
			  },
			  800:{
				  items:2
			  },
			  1000:{
				  items:3
			  }
		  }
	  });
})(window.jQuery);



document.addEventListener('DOMContentLoaded', () => {
	"use strict";
  
	/**
	 * Preloader
	 */
	const preloader = document.querySelector('#preloader');
	if (preloader) {
	  window.addEventListener('load', () => {
		preloader.remove();
	  });
	}
  
	/**
	 * Sticky header on scroll
	 */
	const selectHeader = document.querySelector('#header');
	if (selectHeader) {
	  document.addEventListener('scroll', () => {
		window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
	  });
	}
  
  

	/**
	 * Scroll top button
	 */
	const scrollTop = document.querySelector('.scroll-top');
	if (scrollTop) {
	  const togglescrollTop = function() {
		window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
	  }
	  window.addEventListener('load', togglescrollTop);
	  document.addEventListener('scroll', togglescrollTop);
	  scrollTop.addEventListener('click', window.scrollTo({
		top: 0,
		behavior: 'smooth'
	  }));
	}
  
  
  });