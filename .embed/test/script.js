$(function() {
	$('body').embed({
		name: 'foo',
		id: 'foo',
		html: '<param value="always" name="AllowScriptAccess">',
		data: './file.swf',
		width: '100',
		height: '100'
	});
});
