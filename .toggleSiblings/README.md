# $.toggleSiblings()

Adds a class for each element in the set of matched elements and removes all siblings (except active).

## Use
*For example you could use the following code:*

**Prototype**

	.toggleSiblings(className, [,Element]);


*Implicit indication of the element*

	$('div').click(function() {
		return $(this).toggleSiblings('active');
	});

*Explicit indication of the element*

	$('div').click(function() {
		return $(this).toggleSiblings('active', 'a');
	});

* License
    The toCSS module is licensed under the MIT (MIT_LICENSE.txt) license.

* Copyright (c) 2011 [Alexander Guinness] (https://github.com/monolithed)
