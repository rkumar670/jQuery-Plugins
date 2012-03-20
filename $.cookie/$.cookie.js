(function($) {
	/**
	 * $.cookie
	 * This plugin provides the setting, getting and deleting cookies
	 * Use:
	 *
	 * Setting a cookie:
	 * -------------------------------------------
	 * 1. A simple setting
	 * $.cookie('name', 'value');
	 *
	   2. An advanced setting
	 * $.cookie('name', 'value', {
	 *    expires: 5, //5 days
	 *    path: '/',
	 *    domain: 'example.com',
	 *    secure: true
	 * });
	 *
	 * Set the cookie to expire in 5 hours
	 *
	 * var time = new Date();
	 * time.setHours(time.getHours() + 5);
	 *
	 * $.cookie('name', 'value', {
	 *   expires: time.toUTCString(), // 5 hours
	 * });
	 *
	 * 2. A complex setting
	 * $.cookie({
	 *    name: 'name',
	 *    value: 'value',
	 *    expires: 5,
	 *    path: '/',
	 *    domain: 'example.com',
	 *    secure: true
	 * });
	 *
	 *
	 * Getting the cookie:
	 * -------------------------------------------
	 *
	 * $.cookie('name'); //1
	 *
	 * if multiple names:
	 * $.cookie('name', 'value1', {path: '/1'});
	 * $.cookie('name', 'value2', {path: '/2'});
	 *
	 * $.cookie('name'); //['value1', 'value2']
	 *
	 *
	 * Deleting the cookie:
	 * -------------------------------------------
	 * $.cookie('name', '')
	 *
	 * @author: Alexander Guinness <http://github.com/monolithed>
	 * @version: 1.0
	 * @this: {jQuery Object}
	 *
	 * @params {mixed} String (cookie name), if only one parameter has been passed,
	 * Object, if complex notation
	 * @params {String} cookie value
	 * @params {Object} complex notation
	 *
	 * @return:
	 *  - jQuery Object, if no data is associated with the parameters
	 *    or or when cookies are set;
	 *  - String, if only one parameter has been passed and it's a string
	 *  - Array, if multiple names
	 * @edition: RFC 2109
	 * @license: MIT, BSD, GPL 2
	 * @date: Sat Apr 21 19:08:00 2012
	 **/

	$.cookie = function(name, value, options) {
		var params = $.extend({
		}, options || name);

		var cookie = {
			get: function(name) {
				var map = $.map(document.cookie.split(';'), function(item) {
					item = item.split('=');
					if ($.trim(item[0]) === name)
						return item[1];
				});

				return map.length > 1 ? map : map.join('');
			},

			set: function() {
				var days = params.expires, i = 0;

				if (typeof days == 'number') {
					var time = new Date();
					time.setDate(time.getDate() + days);
					params.expires = time.toUTCString();
				}

				var map = $.map(params, function(value, name) {
					if (name != 'name' && name != 'value')
						return [i++ ? '; ' : '', name, '=', value];
				}).join('');

				document.cookie = params.name.concat('=', encodeURIComponent(params.value), ';', map);
			},

			data: function(object) {
				return Object.prototype.toString.call(object) === '[object Object]';
			}
		};

		if (arguments.length == 1) {
			if (typeof name == 'string')
				return cookie.get(name);

			else if (cookie.data(name))
				cookie.set();
		}
		else if (typeof name == 'string' && value) {
			if (cookie.data(options)) {
				params.name = name;
				params.value = value;
				cookie.set();
			}
			else document.cookie = name.concat('=', encodeURIComponent(value), ';');
		}
		return this;
	};
})(jQuery);
