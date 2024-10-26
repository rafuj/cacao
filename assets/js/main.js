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
		// Faq Accordion
		$(".cacao-faq__item-button").on("click", function () {
			if ($(this).closest(".cacao-faq__item").hasClass("open")) {
				$(this).closest(".cacao-faq__item").removeClass("open");
				$(this).next(".cacao-faq__item-body").slideUp();
			} else {
				$(this)
					.closest(".cacao-faq__item")
					.siblings(".cacao-faq__item")
					.removeClass("open");
				$(this)
					.closest(".cacao-faq__item")
					.siblings()
					.find(".cacao-faq__item-body")
					.slideUp();
				$(this).closest(".cacao-faq__item").addClass("open");
				$(this)
					.closest(".cacao-faq__item")
					.find(".cacao-faq__item-body")
					.slideDown();
			}
		});
		//details-ingredients-slider
		var detailsSwiper = new Swiper(".cacao-details-ingredients-slider", {
			spaceBetween: 16,
			slidesPerView: "auto",
			slidesPerGroupSkip: 1,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		});
		//details-ingredients-slider
		var completeRoutineSlider = new Swiper(".cacao-complete-routine-bottom", {
			spaceBetween: 16,
			slidesPerView: "auto",
			slidesPerGroupSkip: 1,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		});
		// cacao product details slider
		var thumbsSlider = new Swiper(".cacao-details-thumbs-slider", {
			spaceBetween: 4,
			slidesPerView: 5,
			freeMode: true,
			watchSlidesProgress: true,
			direction: "vertical",
		});
		var mainSlider = new Swiper(".cacao-details-main-slider", {
			spaceBetween: 10,
			thumbs: {
				swiper: thumbsSlider,
			},
			pagination: {
				el: ".cacao-details-swiper-pagination",
				clickable: true,
			},
		});

		// Function to filter items based on the selected type
		function filterItems(targetType) {
			if (targetType === "all") {
				$("#cacao-filter-items-list [data-cacao-type]").show();
			} else {
				$("#cacao-filter-items-list [data-cacao-type]").hide();
				$(
					'#cacao-filter-items-list [data-cacao-type="' + targetType + '"]'
				).show();
			}
		}
		// Initial filter based on the active item on page load
		const initialActive = $("#cacao-filter-menu-list li.active").data(
			"cacao-target"
		);
		filterItems(initialActive);

		// Filter items when a filter option is clicked
		$("#cacao-filter-menu-list li").click(function () {
			const targetType = $(this).data("cacao-target");

			$("#cacao-filter-menu-list li").removeClass("active");
			$(this).addClass("active");

			filterItems(targetType);
		});
	});
	// cacao product details slider
	$(window).on("load", function () {
		const timer = setTimeout(() => {
			$(".cacao-newsletter").addClass("active");
		}, 2000);
		$(".cacao-newsletter-close-button").on("click", function () {
			$(".cacao-newsletter").removeClass("active");
		});
	});
})(jQuery);
