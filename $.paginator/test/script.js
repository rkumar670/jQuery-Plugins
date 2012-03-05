$(function() {
	$('#paginator').paginator({
		ajax: function (current, url) {
			var li = $('li span');
			li.eq(0).text(current);
			li.eq(1).text(url);
		},
		pages: 100,
		stack: 10,
		current: 1,
		url: 'http://example.com/'
	});
});
