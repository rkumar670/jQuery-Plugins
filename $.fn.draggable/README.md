# $.fn.draggable()

Sets or retrieves the object and its content in HTML

**Synopsis**

```javascript
$.fn.draggable({
    [ axis ], [, prevent ], [, overflow], [, callback { [ start ], [, end] }]
});
```

**Options**

```javascript
/*
@option: {String} axis [ x | y | xy] - Dragging only one axis. Valid values are: x, y, xy (default value).
@option: {Array} prevent - Prevent dragging on the specified elements. Default values are: input, select, button
@option: {Object} callback - Callback with start and end properties.
@option: {String} relative [ offset | position ] - Allows to retrieve the current position of an element relative to the document or the offset parent. Default value is 'position', also allowed 'offset'..
@option: {Boolean} overflow [ true | false ]- To set the css property overflow during the dragging?
*/
```

## Use
*For example you could use the following code:*

**Axis**
<br />
*Axis: xy*

```javascript
$('#xy').draggable();
```

*Axis: x (dragging only one axis: x)*

```javascript
$('#x').draggable({axis: 'x'});
```

*Axis: y (dragging only one axis: y)*

```javascript
$('#y').draggable({axis: 'y'});
```

**Prevent**
<br />
*Prevent dragging on the specified elements. Default values are: input, select, button.*

```javascript
$('#y').draggable({
	axis: 'y',
	prevent: ['a', 'label']
});
```

**Relative**
<br />
*relative [ offset | position ] - Allows to retrieve the current position of an element relative to the document or the offset parent. Default value is 'position', also allowed 'offset'*

```javascript
$('#y').draggable({
	axis: 'y',
	relative: 'offset'
});
```

**Callback**
<br />
*Callback with start and end prorties.*

```javascript
$('#y').draggable({
	axis: 'y',
	callback: {
		start: function() {
			console.log($(this).offset.top|0);
		},
		end: function() {
			console.log($(this).offset.top|0);
		}
	}
});
```

**Overflow**
<br />
*To set the css property overflow during the dragging?*

```javascript
$('#y').draggable({
	overflow: true
});
```


**All options**

```javascript
$('#foo').draggable({
    axis: 'x',
    prevent: ['a', 'label'],
    callback: {
		start: function() {
			console.log($(this).offset.top|0);
		},
		end: function() {
			console.log($(this).offset.top|0);
		}
	},
    overflow: true
})
```

* License
    The $.fn.draggable() module is licensed under the MIT (MIT_LICENSE.txt) license.

* Copyright (c) 2012 [Alexander Guinness] (https://github.com/monolithed)
