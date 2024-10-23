(function ($) {
	"use strict";

	$(document).ready(function () {
		var swiper = new Swiper(".cacao-clients__slider", {
			loop: true,
			pagination: {
				el: ".cacao-clients__slider-pagination",
				clickable: true,
			},
		});
		var maquesSwiper = new Swiper(".cacao-nos-marques__slider", {
			loop: true,
			spaceBetween: 0,
			breakpoints: {
				0: {
					slidesPerView: 1.64,
				},
				576: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 4,
				},
			},
		});
		$(".cacao-nos-marques__arrows-prev").click(function () {
			maquesSwiper.slidePrev();
		});
		$(".cacao-nos-marques__arrows-next").click(function () {
			maquesSwiper.slideNext();
		});

		var routineSwiper = new Swiper(".cacao-routine__slider", {
			loop: true,
			spaceBetween: 0,
			breakpoints: {
				0: {
					slidesPerView: 2,
				},
				576: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 4,
				},
			},
		});
		$(".cacao-routine__arrows-prev").click(function () {
			routineSwiper.slidePrev();
		});
		$(".cacao-routine__arrows-next").click(function () {
			routineSwiper.slideNext();
		});
	});
})(jQuery);
