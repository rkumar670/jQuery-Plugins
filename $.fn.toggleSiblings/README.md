# $.toggleSiblings()

Adds a class for each element in the set of matched elements and removes all siblings (except active).

**Synopsis**

```javascript
.toggleSiblings(className, [,Element]);
```

## Use
*For example you could use the following code:*

*Implicit indication of the element*

```javascript
$('div').click(function() {
	return $(this).toggleSiblings('active');
});
```

*Explicit indication of the element*

```javascript
$('div').click(function() {
	return $(this).toggleSiblings('active', 'a');
});
```

* License
    The $.toggleSiblings() module is licensed under the MIT (MIT_LICENSE.txt) license.

* Copyright (c) 2011 [Alexander Guinness] (https://github.com/monolithed)
