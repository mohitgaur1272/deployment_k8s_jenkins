/* JavaScript Document */
jQuery(document).ready(function() {
    'use strict';
	
	// main-silder-swiper
	if(jQuery('.main-silder-swiper').length > 0){
		var swiper = new Swiper('.main-silder-swiper', {
			speed: 1500,
			parallax: true,
			loop:true,
			autoplay: {
				delay: 2500,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">' + (index + 1) + '</span>';
				},
			},
			navigation: {
				nextEl: '.swiper-button-next1',
				prevEl: '.swiper-button-prev1',
			},
		});
	}
	
	if(jQuery('.main-silder-swiper-03').length > 0){
		//alert(0);
		var galleryThumbs = new Swiper(".swiperThumbsHome", {
			spaceBetween: 0,
			slidesPerView: 3,
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			autoplay: {
				delay: 2500,
			},
			breakpoints: {
				1280: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
		var swiper = new Swiper('.main-silder-swiper-03', {
			speed: 1500,
			parallax: true,
			loop:true,
			autoplay: {
				delay: 2500,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-home-next',
				prevEl: '.swiper-button-home-prev',
			},
			thumbs: {
				swiper: galleryThumbs
			}
		});
		
	}
	
	// main-silder-swiper-2
	if(jQuery('.main-silder-swiper-2').length > 0){
		var swiper = new Swiper('.main-silder-swiper-2', {
			speed: 1500,
			parallax: true,
			loop:true,
			autoplay: {
				delay: 2500,
			}
		});
	}
	
	
	// main-silder-swiper
	if(jQuery('.main-silder-swiper-04').length > 0){
		var swiper = new Swiper('.main-silder-swiper-04', {
			speed: 1500,
			parallax: true,
			loop:true,
			autoplay: {
				delay: 2500,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		});
	}
	
	
	
	// Swiper Portfolio
	if(jQuery('.swiper-portfolio').length > 0){
		var swiper2 = new Swiper('.swiper-portfolio', {
			slidesPerView: 4,
			spaceBetween: 0,
			speed: 1500,
			loop:true,
			navigation: {
				nextEl: '.swiper-button-next2',
				prevEl: '.swiper-button-prev2',
			},
			autoplay: {
				delay: 2500,
			},
			breakpoints: {
				1280: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 3,
				},
				591: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	// Blog Swiper
	if(jQuery('.blog-swiper').length > 0){
		var swiper2 = new Swiper('.blog-swiper', {
			slidesPerView: 3,
			spaceBetween: 0,
			speed: 1500,
			loop:true,
			autoplay: {
				delay: 2500,
			},
			breakpoints: {
				1280: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 1,
				},
				691: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}

		// Blog Swiper
	if(jQuery('.blog-swiper-2').length > 0){
		var swiper2 = new Swiper('.blog-swiper-2', {
			slidesPerView: 2,
			spaceBetween: 30,
			speed: 1500,
			loop:true,
			autoplay: {
				delay: 2500,
			},
			breakpoints: {
				1280: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 1.5,
				},
				991: {
					slidesPerView:1.2,
				},
				767: {
					slidesPerView: 1,
				},
				600: {
					slidesPerView: 1,
				},
				360: {
					slidesPerView: 1,
				},
			}
		});
	}

	// Blog Swiper
	if(jQuery('.blog-swiper-3').length > 0){
		var swiper2 = new Swiper('.blog-swiper-3', {
			slidesPerView: 3,
			spaceBetween: 30,
			speed: 1500,
			loop:true,
			autoplay: {
				delay: 2500,
			},
			breakpoints: {
				1191: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 1.5,
				},
				600: {
					slidesPerView: 1.2,
				},
				360: {
					slidesPerView: 1,
				},
			}

		});
	}




	// Blog Swiper
	if(jQuery('.post-swiper').length > 0){
		var swiper2 = new Swiper('.post-swiper', {
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 1500,
			loop:true,
			autoplay: {
				delay: 2500,
			},
			navigation: {
				nextEl: '.prev-post-swiper-btn',
				prevEl: '.next-post-swiper-btn',
			},
		});
	}
	
	// Testimonial Swiper
	if(jQuery('.testimonial-swiper').length > 0){
		var swiper3 = new Swiper('.testimonial-swiper', {
			speed: 1500,
			parallax: true,
			slidesPerView: 3,
			spaceBetween: 30,
			loop:true,
			autoplay: {
				delay: 2500,
			},
			navigation: {
				nextEl: '.swiper-button-next3',
				prevEl: '.swiper-button-prev3',
			},
			breakpoints: {
				1191: {
					slidesPerView: 3,
				},
				691: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	// Testimonial Swiper
	if(jQuery('.testimonial-swiper-2').length > 0){
		var swiper3 = new Swiper('.testimonial-swiper-2', {
			speed: 1500,
			parallax: true,
			slidesPerView: 3,
			spaceBetween: 30,
			loop:true,
			autoplay: {
				delay: 2500,
			},
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next3',
				prevEl: '.swiper-button-prev3',
			},
			breakpoints: {
				1191: {
					slidesPerView: 2,
				},
				691: {
					slidesPerView: 1,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
		// Testimonial Swiper
	if(jQuery('.testimonial-swiper-3').length > 0){
		var swiper3 = new Swiper('.testimonial-swiper-3', {
			speed: 1500,
			parallax: true,
			slidesPerView: 3,
			spaceBetween: 30,
			loop:true,
			autoplay: {
				delay: 2000,
			},
			breakpoints: {
				1191: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 1.5,
				},
				991: {
					slidesPerView: 1.2,
				},
				767: {
					slidesPerView: 1,
				},
				600: {
					slidesPerView: 1,
				},
				360: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	
	
	// Team Swiper
	if(jQuery('.team-swiper').length > 0){
		var swiper4 = new Swiper('.team-swiper', {
			speed: 1500,
			parallax: true,
			slidesPerView: 4,
			spaceBetween: 30,
			loop:true,
			autoplay: {
				delay: 2500,
			},
			navigation: {
				nextEl: '.swiper-button-next4',
				prevEl: '.swiper-button-prev4',
			},
			breakpoints: {
				1191: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 3,
				},
				591: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	// Team Swiper
	if(jQuery('.team-swiper-2').length > 0){
		var swiper4 = new Swiper('.team-swiper-2', {
			speed: 1500,
			parallax: true,
			slidesPerView: 4,
			spaceBetween: 30,
			loop:true,
			autoplay: {
				delay: 2500,
			},
			navigation: {
				nextEl: '.swiper-button-next4',
				prevEl: '.swiper-button-prev4',
			},
			breakpoints: {
				1191: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 3,
				},
				591: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
		// Team Swiper
	if(jQuery('.team-swiper-3').length > 0){
		var swiper4 = new Swiper('.team-swiper-3', {
			speed: 1500,
			parallax: true,
			slidesPerView: 4,
			spaceBetween: 30,
			loop:true,
			autoplay: {
				delay: 2500,
			},
			breakpoints: {
				1191: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 2,
				},
				591: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	
	
	// Clients Swiper
	if(jQuery('.clients-swiper').length > 0){
		var swiper5 = new Swiper('.clients-swiper', {
			speed: 1500,
			parallax: true,
			slidesPerView: 4,
			spaceBetween: 30,
			loop:true,
			autoplay: {
				delay: 2500,
			},
			navigation: {
				nextEl: '.swiper-button-next5',
				prevEl: '.swiper-button-prev5',
			},
			breakpoints: {
				1191: {
					slidesPerView: 6,
				},
				991: {
					slidesPerView: 5,
				},
				691: {
					slidesPerView: 4,
				},
				591: {
					slidesPerView: 3,
				},
				320: {
					slidesPerView: 2,
				},
			}
		});
	}
	
	// main-silder-swiper
	if(jQuery('.main-silder-thumb-05').length > 0){
		var swiper = new Swiper('.main-silder-thumb-05', {
			spaceBetween: 0,
			slidesPerView: 1,
			freeMode: true,
			watchSlidesProgress: true,
			speed: 2000,
			autoplay: {
				delay: 2500,
			},
		});
		var swiper2 = new Swiper(".main-silder-05", {
			spaceBetween: 0,
			slidesPerView: 1,
			speed: 2000,
			autoplay: {
				delay: 2500,
			},
			navigation: {
				nextEl: '.swiper-button-next1',
				prevEl: '.swiper-button-prev1',
			},
			thumbs: {
				swiper: swiper,
			},
				1191: {
					slidesPerView: 1,
				},
				991: {
					slidesPerView: 1,
				},
				691: {
					slidesPerView: 1,
				},
				591: {
					slidesPerView: 1,
				},
				320: {
					slidesPerView: 1,
				},
		});
	}
	
});

/* Document .ready END */