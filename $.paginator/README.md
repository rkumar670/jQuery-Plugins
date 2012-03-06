# $.paginator()

Plugin for scrolling pagination

## Use
*For example you could use the following code:*

	$('#id').paginator({
		ajax : function(current, url) {
			console.log(current, url);
		},
		pages : 100,
		stack : 10,
		current : 1,
		url :  window.location.href,
	});

* License
    The $.paginator() module is licensed under the MIT (MIT_LICENSE.txt) license.

* Copyright (c) 2011 [Alexander Guinness] (https://github.com/monolithed)
