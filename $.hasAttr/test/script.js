$(function() {
	$('input').click(function() {
		alert($(this).hasAttr('type'));
	});
});
