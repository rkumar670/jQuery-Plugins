# $.queryURL()

Returns the parameters of the current or specified URL

## Use
*For example you could use the following code:*

*Base url http://example.com?foo=1&bar=2

Example 1:

```javascript
$.queryURL()
```
*Result:*

```javascript
{foo="1", bar="2"}
```

Example 2:

```javascript
$.queryURL('foo')
```
*Result:*

	1

Example 3:

```javascript
$.queryURL({
	param: 'foo',
	query: 'foo=1&bar=2'
}
```

*Result:*

	1

* License
    The $.queryURL() module is licensed under the MIT (MIT_LICENSE.txt) license.

* Copyright (c) 2011 [Alexander Guinness] (https://github.com/monolithed)
