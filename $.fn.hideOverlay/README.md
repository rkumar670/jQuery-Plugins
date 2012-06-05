# $.fn.hideOverlay()

Hides the element by clicking on any part of the document (not including the element itself) or by keydown event (escape) <br />
This method is most useful for other jQuery plugins as well.

```javascript
$.fn.hideOverlay( [ method ], [, params ], [, callback ], [ bind ] )

/*
@param: {[String]} method - jQuery method. Default value is 'hide'
@param: {[mixed]} params - Optional parameter associated with the jQuery method
@param: {[Function]} callback - Callback function.
@param: {[Boolean]} bind - Binds the previous calls. Default value is true. If you don't need to keep the previous calls in the stack, set a false value for this option.
*/
```

## Use
*For example you could use the following code:*

```javascript
$('#id').hideOverlay();
```

```javascript
$('#id').hideOverlay('fadeIn');
```

```javascript
$('#id').hideOverlay('fadeIn', 300);
```

```javascript
$('#id').hideOverlay('fadeIn', 300, function() {
   //callback
});
```

```javascript
$('#id').hideOverlay('removeClass', 'active', function() {
   //...
});
```

```javascript
$('#id').hideOverlay('removeClass', 'active', function() {
   //...
}, false);
```

**Simple example**

*html*

```html
<ul id="menu">
	<li><a href="#">Click</a></li>
	<li class="block"><span>Click anywhere or press the key 'escape'</span></li>
</ul>
```

*CSS*

```css
ul {
	width: 150px;
	overflow: hidden;
}

li {list-style: none;}

li a {
	background: #404040;
	color: #FFF;
	display: block;
	font: bold 15px/34px arial;
	position: relative;
	text-align: center;
	width: 149px;
	height: 36px;
}

li.block {
	background: #65DE74;
	color: #4A4A4A;
	display: none;
	height: 150px;
	text-align: center;
}

li.block span {
	display: block;
	line-height: 18px;
	padding-top: 58px;
	position: relative;
}

li.active {display: block;}
```

*JavaScript*

```javascript
$(function() {
	var menu = $('#menu');

	menu.find('li a').click(function(event) {
		menu.find('.block')
			.toggleClass('active')
			.hideOverlay('toggleClass', 'active');

		event.stopImmediatePropagation();
	});
});
```

* License
    The $.exists() module is licensed under the MIT (MIT_LICENSE.txt) license.

* Copyright (c) 2011 [Alexander Guinness] (https://github.com/monolithed)
