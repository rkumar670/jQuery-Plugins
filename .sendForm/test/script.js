$(function() {
	$('input[type="button"]').click(function() {
		$('#form').sendForm({
			foo: 1,
			bar: 2
		}, 1);
	});
});
