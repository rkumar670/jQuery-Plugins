# .toggleList()

This module provides the .toggleList() method that binds two blocks by event

## Use
*For example you could use the following code:*

**target:**

```javascript
$('.ul1 > li').toggleList({
	target: $('.ul2 > li')
});
```

**callback:**

```javascript
$('.ul1 > li').toggleList({
	target: $('.ul2 > li'),
	callback: function(target, index) {
		console.log(target, index);
	}
});
```

**prevent:**

```javascript
$('.ul1 > li').toggleList({
	target: $('.ul2 > li'),
	prevent: flase
});
```

**event:**

```javascript
$('.ul1 > li').toggleList({
	target: $('.ul2 > li'),
	event: 'mouseover'
});
```

**prevent:**

```javascript
$('.ul1 > li').toggleList({
	target: $('.ul2 > li'),
	prevent: flase
});
```
**type:**

```javascript
$('.ul1 > li').toggleList({
	target: $('.ul2 > li'),
	type: 'class' //index by default
});
```

**markup:**

*Toggle by index*

```html
	<ul class="ul1">
		<li>1</li>
		<li>2</li>
		<li>3</li>
	</ul>

	<ul class="ul2">
		<li class="active">1</li>
		<li>2</li>
		<li>3</li>
	</ul>
```

*Toggle by class name*

```html
	<ul class="ul1">
		<li class="foo">1</li>
		<li class="bar">2</li>
		<li class="baz">3</li>
	</ul>

	<ul class="ul2">
		<li class="foo active">1</li>
		<li class="bar">2</li>
		<li class="baz">3</li>
	</ul>
```

* License
    The .toggleList() module is licensed under the MIT (MIT_LICENSE.txt) license.

* Copyright (c) 2011 [Alexander Guinness] (https://github.com/monolithed)
