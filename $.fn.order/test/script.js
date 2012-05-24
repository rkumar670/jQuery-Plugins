$(function() {
	$('#input').one('click', function() {
		$('.a, .b, .c').order([2, 0, 1]);

		$('#items > li').each(function(i) {
			$(this).text(i + ' (' + $(this).data('item') + ')')
		});
	});
});
