# $.fn.autocomplete()

WARNING: [unstable state]

Provides suggestions while you type into the field.
NOTE: works only with JSON format!

**Synopsis**

```javascript
$.fn.draggable(
	[{
		[ source ], [, count ], [, name ], [, css ], [, delay ], [, focus ], [, minimal ], [, select ], [, open ], [, from ]
	}],
	[, disable ], [, enable ], [, clear ], [, destroy ], [, ],
);
```

**Options**

```javascript
/*
 * @option {String} source - JSON string
 * @option {Number} [count] - Specifies the number of list items
 * @option {String} [name] - Specifies default class name for the widget
 * @option {Number} [css] - Specifies CSS styles
 * @option {Number} [delay] - Initialize a autocomplete with the delay option
 * in milliseconds after a keystroke to activate itself.
 * @option {Boolean} [focus] - Specifies focus event
 * @option {Number} [minimal] - Initialize a autocomplete with minimum number of characters
 * a user has to type before the Autocomplete activates
 * @option {Function} [select] - Supply a callback function to handle the select event
 * if the event on input element, the value of "this" is input
 *  if the event on <li /> element the value of "this" is <li class="active" />
 * if the function returns a false initialized event event.peventDefault();
 * @option {Function} [open] - Triggered when the suggestion menu is opened
 * @option {Number | String} from - Specifies to the element that holds data.
 * If passed an array the value must be an numeric array index.
 * For an object should pass a sting.
 *
 * Example:
 * {{object : {data : {...}}}} // 'from', get data from 'data' property
 * {[], [...]} // 1, get data from first array index
 *
 * Methods use like: $('#input').autocomplete('disable');
 *
 * @method {Number} disable - Disable the autocomplete
 * @method {Number} enable - Enable the autocomplete.
 * @method {Number} clear - Clear inputs value
 * @method {Number} destroy - Remove the autocomplete functionality completely
 * @this: {jQuery Object}
*/
```

## Use
*For example you could use the following code:*

*Markup*

```html
<input type="text" id="autocomplete" placeholder="Search" />
```

*Options*

```javascript
	 * $('#autocomplete').autocomplete({
	 *		source: 'http://api.bing.com/osjson.aspx?JsonType=callback&JsonCallback=?',
	 *		open: function(index, data) {
	 *			return '<a href="'.concat('http://www.bing.com/search?q=', data, '">', data, '</a>');
	 *		},
	 *		count: 10,
	 *		select: function() {
	 *			window.location.replace(this.prop('href'));
	 *			return false;
	 *		},
	 *		from: 1,
	 *		close: function() {
	 *			console.log(this);
	 *		},
	 *		change: function(event, value) {
	 *			console.log(value);
	 *		},
	 *		minimal: 2
	 * });
	 *
	 * $(document).dblclick(function() {
	 *		$('#autocomplete').autocomplete('destroy');
	 * });
```

* License
    The $.fn.draggable() module is licensed under the MIT (MIT_LICENSE.txt) license.

* Copyright (c) 2012 [Alexander Guinness] (https://github.com/monolithed)
