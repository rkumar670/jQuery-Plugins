$(function() {
	//change type via trigger
	$('.checkbox').click(function() {
		$(this).toggleType($('.password'));
	});

	//change own type
	$('.text').click(function() {
		$(this).toggleType({
			type: 'text',
			element: $(this),
			callback: function(a) {
				alert('Ok!');
			}
		});
	});
});
