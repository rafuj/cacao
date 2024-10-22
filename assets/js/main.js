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
	});
})(jQuery);
