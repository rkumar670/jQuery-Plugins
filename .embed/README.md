# .embed()

Returns a cross-browser <object /> tag to embed the flash video in html code

##Synopsis

```javascript
Object $.fn.embed(Object object, [Object params]);
```

## Use
*For example you could use the following code:*

**Markup:**

```javascript
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
```

**Result:**

```html
<object type="application/x-shockwave-flash" name="foo" id="foo" style="width: 100px; height: 100px;" data="./file.swf">
	<param name="movie" value="./file.swf">
	<param name="transparent" value="wmode">
	<param name="AllowScriptAccess" value="always">
	<a href="#">link</a>
</object>
```

* License
    The .embed() module is licensed under the MIT (MIT_LICENSE.txt) license.

* Copyright (c) 2012 [Alexander Guinness] (https://github.com/monolithed)
