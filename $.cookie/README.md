# $.cookie()

This plugin provides the setting, getting and deleting cookies

##Synopsis:
```javascript
$.cookie(String/Object name, [, String value], [, Object options]);
```


## Installation
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
<script src="/$.cookie.js" type="text/javascript"></script>
```


## Usage

*For example you could use the following code:*

###Setting a cookie:

*Create session cookie:*

```javascript
$.cookie('name', 'value');
```

*An advanced setting: <br />
Set cookies for 5 days (days are set by default)*

```javascript
$.cookie('name', 'value', {
   expires: 5, // 5 days
   path: '/',
   domain: 'example.com',
   secure: true
});
```

*Set the cookie to expire in 5 hours*

```javascript
var time = new Date();
time.setHours(time.getHours() + 5);

$.cookie('name', 'value', {
   expires: time.toUTCString(), // 5 hours
});
```

*A complex setting:*

```javascript
$.cookie({
   name: 'name',
   value: 'value',
   expires: 7,
   path: '/',
   domain: 'example.com',
   secure: true
});
```

###Getting the cookie:

```javascript
$.cookie('name'); //1
```

*if multiple names:*

```javascript
$.cookie('name', 'value1', {path: '/1'});
$.cookie('name', 'value2', {path: '/2'});

$.cookie('name'); //['value1', 'value2']
```

###Deleting the cookie:

```javascript
$.cookie('name', '');
```

##Options in accordance with the RFC 2109

* <b>Domain=domain</b>

```
domain: 'example.com'
```
Optional.  The Domain attribute specifies the domain for which the <br />
cookie is valid.  An explicitly specified domain must always start <br />
with a dot.

* <b>Max-Age=delta-seconds (Expires)</b>

```
expires: 7
```
Optional. The Max-Age attribute defines the lifetime of the <br />
cookie, in seconds.  The delta-seconds value is a decimal non- <br />
negative integer.  After delta-seconds seconds elapse, the client <br />
should discard the cookie.  A value of zero means the cookie <br />
should be discarded immediately. <br />

CAUTION: use expires attribute, max-age is not supported by IE

* <b>Path=path</b>

```
path: '/'
```
Optional.  The Path attribute specifies the subset of URLs to <br />
which this cookie applies. <br />

* <b>Secure</b>

```
secure: true
```
Optional.  The Secure attribute (with no value) directs the user <br />
agent to use only (unspecified) secure means to contact the origin <br />
server whenever it sends back this cookie. <br />
<br />
The user agent (possibly under the user's control) may determine <br />
what level of security it considers appropriate for "secure" <br />
cookies.  The Secure attribute should be considered security <br />
advice from the server to the user agent, indicating that it is in <br />
the session's interest to protect the cookie contents. <br />


##License
The $.cookie() plugin is licensed under the MIT, BSD, GPL 2 licenses.


* Copyright (c) 2012 [Alexander Guinness] (https://github.com/monolithed)
