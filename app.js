$(function() {

	let header = $("#header__contacts");
	let intro = $("#header__link");
	let headerH = header.innerHeight();
	let scrollPos = $(window).scrollTop();

	checkScroll (scrollPos, headerH)

	$(window).on("scroll resize", function() {
		headerH = header.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll (scrollPos, headerH)
	})

	function checkScroll (scrollPos, headerH) {
		if (scrollPos > headerH) {
			intro.addClass("fixed");
		} else {
			intro.removeClass("fixed");
		}
	}


});