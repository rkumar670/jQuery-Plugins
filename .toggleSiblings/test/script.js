$(function() {
	$('li').click(function() {
		return $(this).toggleSiblings('active');
	});
});
