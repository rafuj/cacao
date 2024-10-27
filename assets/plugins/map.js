(function ($) {
	$(document).ready(function () {
		$("#cacao-world-map").vectorMap({
			map: "world_en",
			backgroundColor: "transparent",
			color: "#8B201825",
			hoverOpacity: 0.7,
			selectedColor: "#8B2018", // Change color on selection
			enableZoom: false,
			showTooltip: true,
			onRegionClick: function (event, code, region) {},
		});
	});
})(jQuery);
