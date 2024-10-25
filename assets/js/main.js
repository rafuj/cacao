(function ($) {
	"use strict";

	$(document).ready(function () {
		// clients slider
		var swiper = new Swiper(".cacao-clients__slider", {
			loop: true,
			pagination: {
				el: ".cacao-clients__slider-pagination",
				clickable: true,
			},
		});
		// marques slider
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
		// routing slider
		var routineSwiper2 = new Swiper(".cacao-routine__slider", {
			spaceBetween: 0,
			grid: {
				rows: 2,
				fill: "row",
			},
			breakpoints: {
				0: {
					slidesPerView: 2,
					grid: {
						rows: 2,
						fill: "row",
					},
				},
				576: {
					slidesPerView: 2,
					grid: {
						rows: 2,
						fill: "row",
					},
				},
				768: {
					slidesPerView: 3,
					grid: {
						rows: 1,
						fill: "row",
					},
				},
				1024: {
					slidesPerView: 4,
					grid: {
						rows: 1,
						fill: "row",
					},
				},
			},
		});
		$(".cacao-routine__arrows-prev").click(function () {
			routineSwiper.slidePrev();
		});
		$(".cacao-routine__arrows-next").click(function () {
			routineSwiper.slideNext();
		});
		// marquee
		$("#cacao-marquee").marquee({
			duration: 50000,
			pauseOnHover: true,
			duplicated: true,
			gap: 0,
			startVisible: true,
		});
		// convert img into svg
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
		// has submenu class update
		function submenuClasses() {
			$(".cacao-megamenu").each(function () {
				$(this)
					.closest(".cacao-nav__menu-item")
					.find(".cacao-nav__menu-item-link")
					.addClass("cacao-nav__menu-link--has-submenu");
			});
		}
		submenuClasses();
		// nav menu toggler
		$(".cacao-nav__menu-item-link").each(function () {
			if (window.innerWidth < 992) {
				$(this).on("click", function (e) {
					e.preventDefault();
					if ($(this).hasClass("open")) {
						$(this).removeClass("open");
						$(this).next(".cacao-megamenu").slideUp();
					} else {
						$(".cacao-nav__menu-item-link").removeClass("open");
						$(".cacao-megamenu").slideUp();
						$(this).addClass("open");
						$(this).next(".cacao-megamenu").slideDown();
					}
				});
			}
		});
		$(".cacao-menu-toggler").on("click", function () {
			$(".cacao-nav__menu, .cacao-overlay").addClass("active");
		});
		$(".cacao-overlay, .cacao-nav__menu-FERMER").on("click", function () {
			$(".cacao-nav__menu, .cacao-overlay").removeClass("active");
		});

		// Header scroll behavior
		let isHovering = false;
		function headerScroll() {
			if ($(".cacao-navbar").hasClass("cacao-transparent-header")) {
				if ($(window).scrollTop() > 0) {
					$(".cacao-navbar").removeClass("active");
				} else {
					if (!isHovering) {
						$(".cacao-navbar").addClass("active");
					}
				}
			}
			if (isHovering && $(window).scrollTop() === 0) {
				$(".cacao-navbar").addClass("inactive");
			} else {
				$(".cacao-navbar").removeClass("inactive");
			}
		}
		headerScroll();
		$(window).on("scroll", function () {
			headerScroll();
		});
		if (
			$(".cacao-navbar").length > 0 &&
			!$(".cacao-navbar").hasClass("cacao-transparent-header")
		) {
			$("body").css("padding-top", $(".cacao-navbar").outerHeight());
		}
		$(".cacao-nav__menu-item").on("mouseenter", function () {
			if ($(this).find(".cacao-megamenu").length > 0) {
				isHovering = true;
				if ($(window).scrollTop() === 0) {
					$(".cacao-navbar").addClass("inactive");
				}
			}
		});
		$(".cacao-nav__menu-item").on("mouseleave", function () {
			isHovering = false;
			headerScroll();
		});
		// nice select
		$(".cacao-select").niceSelect();
		// cacao-ingredients-sidebar-toggler
		$("#cacao-ingredients-sidebar-toggler").on("click", function () {
			$("#cacao-ingredients-sidebar, #cacao-overlay-2").addClass("active");
		});
		$("#cacao-overlay-2, #cacao-ingredients-sidebar-close").on(
			"click",
			function () {
				$("#cacao-ingredients-sidebar, #cacao-overlay-2").removeClass(
					"active"
				);
			}
		);
	});
})(jQuery);
