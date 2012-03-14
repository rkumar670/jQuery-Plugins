# .embed()

Returns a cross-browser <object /> tag to embed the flash video in html code

## Use
*For example you could use the following code:*

**Markup:**

```javascript
$('body').embed({
	name: 'foo',
	id: 'foo',
	html: '<param value="always" name="AllowScriptAccess">',
	data: './file.swf',
	width: '100',
	height: '100'
});
```

**Result:**

```javascript
<object type="application/x-shockwave-flash" name="foo" id="foo" style="width: 100px; height: 100px;" data="./file.swf">
	<param name="AllowScriptAccess" value="always">
	<param name="movie" value="./file.swf">
</object>
```

* License
    The .embed() module is licensed under the MIT (MIT_LICENSE.txt) license.

* Copyright (c) 2012 [Alexander Guinness] (https://github.com/monolithed)
