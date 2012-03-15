$(function() {
	$('input').click(function() {
		alert(JSON.stringify($(this).attributes()));
	});
});
