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
$.cookie('name'); //value
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

##Options in accordance with the RFC 2965
*NOTE: RFC 2165 is obsolete*

* <b>Domain=domain</b>

```
domain: 'example.com'
```
Optional.  The value of the Domain attribute specifies the domain  for which the cookie is valid. If an explicitly specified value does not start with a dot, the user agent supplies a leading dot.

* <b>Max-Age=delta-seconds (Expires)</b>

```
expires: 7
```
Optional. The value of the Max-Age attribute is delta-seconds, the lifetime of the cookie in seconds, a decimal non-negative integer. To handle cached cookies correctly, a client SHOULD calculate the age of the cookie according to the age calculation rules in the HTTP/1.1 specification [RFC2616]. When the age is greater than delta-seconds seconds, the client SHOULD discard the cookie. A value of zero means the cookie SHOULD be discarded immediately.<br />

CAUTION: use expires attribute, max-age is not supported by IE

* <b>Path=path</b>

```
path: '/'
```
Optional. The value of the Path attribute specifies the subset of URLs on the origin server to which this cookie applies.

* <b>Port[="portlist"]</b>

```
port: '80,8000'
```
Optional. 

* <b>Secure</b>

```
secure: true
```
Optional. The Secure attribute (with no value) directs the user agent to use only (unspecified) secure means to contact the origin server whenever it sends back this cookie, to protect the confidentially and authenticity of the information in the cookie.

##License
The *$.cookie()* plugin is licensed under the MIT, BSD, GPL 2 licenses.


* Copyright (c) 2012 [Alexander Guinness] (https://github.com/monolithed)
