(function ($) {
	/**
	 * $.fn.queryURL()
	 * Returns the parameters of the current or specified URL
	 * Licensed under the MIT
	 *
	 * $.queryURL() //{foo="1", bar="2"}
	 *
	 * $.queryURL('foo') //1
	 *
	 * $.queryURL({
	 *    param: 'foo',
	 *    query: 'foo=1&bar=2' //1
	 * }
	 *
	 * @author: Alexander Guinness
	 * @version: 1.0
	 * @options: {param} key is represented by a string
	 * @options: {query} the query string URL separated by &
	 * @this: {jQuery Object}
	 * @return: string or object
	 * @license: MIT
	 * @date: Wed Jun 15 13:00:00 2011
	 **/

	$.queryURL = function (options) {
		var params = $.extend({
			param: null,
			query: null
		}, options),
			object = {};

		$.each((params.query || window.location.search).split(/&|\?/), function(i) {
			var split = this.split('=');
			object[split[0][!i && split[0][0] == '?' ? 'slice' : 'toString'](1)] = split[1];
		});

		return object[params.param || options] || object;
	};
})(jQuery);
