$(function() {
	$('#autocomplete').autocomplete({
		source: 'http://api.bing.com/osjson.aspx?JsonType=callback&JsonCallback=?',
		open: function(index, data) {
			return '<a href="'.concat('http://www.bing.com/search?q=', data, '">', data, '</a>');
		},

		count: 10,

		select: function() {
			window.location.replace(this.prop('href'));
			return false;
		},

		from: 1,

		close: function() {
			console.log(this);
		},

		change: function(event, value) {
			console.log(value);
		},

		minimal: 2
	});

	$(document).dblclick(function() {
		$('#autocomplete').autocomplete('destroy');
	});
});
