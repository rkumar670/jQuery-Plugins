$(function() {
	//set cookie
	$('input[name="set"]').click(function() {
		$.cookie($('input[name="name"]').val(), $('input[name="value"]').val());
	});

	//get cookie
	$('input[name="get"]').click(function() {
		alert($.cookie('name'));
	});
});

