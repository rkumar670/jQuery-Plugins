$(function() {
	var menu = $('#menu');

	menu.find('li a').click(function(event) {
		menu.find('.block')
			.toggleClass('active')
			.hideOverlay('toggleClass', 'active');

		event.stopImmediatePropagation();
	});
});
