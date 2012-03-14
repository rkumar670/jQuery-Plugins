$(function() {
	$('body').embed({
		name: 'foo',
		id: 'foo',
		html: '<a href="#">link</a>',
		data: './file.swf',
		width: '100',
		height: '100'
	}, {
		wmode: 'transparent',
		AllowScriptAccess: 'always'
	});
});
