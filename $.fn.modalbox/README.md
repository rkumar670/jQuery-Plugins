# .modalbox() (unstable state)

An implementation of non-standard modal window

**Synopsis**

```javascript
$.modalbox ([,{
	title: '',
	fade: 400,
	css: {
		width: this.width()
		height: this.width()
	},
	callback: null
}]);
```

## Use
*For example you could use the following code:*

```javascript
$('input[type="button"]').click(function() {
	$('.block').modalbox({
		title: 'Welcome!',
		fade : 1000
	});
});
```

* License
    The .modalbox() module is licensed under the MIT (MIT_LICENSE.txt) license.

* Copyright (c) 2011 [Alexander Guinness] (https://github.com/monolithed)
