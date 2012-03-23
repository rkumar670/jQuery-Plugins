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

* <b>Name</b>

```
name: 'example'
```
Requered. The name of the state information ("cookie") is NAME. NAMEs that begin with $ are reserved and MUST NOT be used by applications.

* <b>Value</b>

```
value: 'example'
```
Requered. The VALUE is opaque to the user agent and may be anything the origin server chooses to send, possibly in a server-selected printable ASCII encoding. <br />
The content may, in fact, be readable by anyone that examines the Set-Cookie2 header.

* <b>Domain=domain</b>

```
domain: 'example.com'
```
Optional. The value of the Domain attribute specifies the domain  for which the cookie is valid. If an explicitly specified value does not start with a dot, the user agent supplies a leading dot.

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

*NOTE: [RFC 2109] (http://tools.ietf.org/html/rfc2109) is obsoleted by [RFC 2965] (http://tools.ietf.org/html/rfc2965)*
*NOTE: [RFC 2965] (http://tools.ietf.org/html/rfc2965) is obsoleted by [RFC 6265] (http://tools.ietf.org/html/rfc6265)*

*READ: [RFC 2119] (http://tools.ietf.org/html/rfc2119)*

##License
The *$.cookie()* plugin is licensed under the MIT, BSD, GPL 2 licenses.

* Copyright (c) 2012 [Alexander Guinness] (https://github.com/monolithed)
