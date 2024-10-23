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
		var routineSwiper2 = new Swiper("#routine-slider-2", {
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
		var routineSwiper = new Swiper("#routine-slider-1", {
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
			routineSwiper2.slidePrev();
		});
		$(".cacao-routine__arrows-next").click(function () {
			routineSwiper.slideNext();
			routineSwiper2.slideNext();
		});
		$("#cacao-marquee").marquee({
			duration: 50000,
			pauseOnHover: true,
			duplicated: true,
			gap: 0,
			startVisible: true,
		});
		$(".convert-svg").each(function () {
			var $img = $(this);
			var imgID = $img.attr("id");
			var imgClass = $img.attr("class");
			var imgURL = $img.attr("src");

			$.get(
				imgURL,
				function (data) {
					var $svg = $(data).find("svg");
					if (typeof imgID !== "undefined") {
						$svg = $svg.attr("id", imgID);
					}
					if (typeof imgClass !== "undefined") {
						$svg = $svg.attr("class", imgClass + " replaced-svg");
					}
					$svg = $svg.removeAttr("xmlns:a");
					$img.replaceWith($svg);
				},
				"xml"
			);
		});
	});
})(jQuery);
