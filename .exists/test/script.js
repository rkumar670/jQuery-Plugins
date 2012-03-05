$(function() {
	$('input').click(function() {
		alert($(['.foo', '.bar', '.baz']).exists());
	});
});
