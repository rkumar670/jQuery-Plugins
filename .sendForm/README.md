# .sendForm()

Submitting the form fields

**Synopsis**

```javascript
$.fn.sendForm (Object object, [,Boolean send]);
```

## Use
*For example you could use the following code:*

```html
<script type="text/javascript">
$('#form').sendForm({
	foo: 1,
	bar: 2
}, 1);
</script>

<form id="form" action="http://example.org/" method="post" target="_blank"> </form>
```

* License
    The .sendForm() module is licensed under the MIT (MIT_LICENSE.txt) license.

* Copyright (c) 2011 [Alexander Guinness] (https://github.com/monolithed)
