(function ($) {
	/**
	 * $.fn.embed()
	 * Returns a cross-browser <object /> tag to embed the flash video in html code
	 * Use:
	 * $('body').embed({
	 *     name: 'foo',
	 *     id: 'foo',
	 *     html: '<a href="#">link</a>',
	 *     data: './file.swf',
	 *     width: '100',
	 *     height: '100'
	 * }, {
	 *     wmode: 'transparent',
	 *     AllowScriptAccess: 'always'
	 *});
	 );
	 *
	 * @author: Alexander Guinness
	 * @version: 1.1
	 * @param: {Object} options - <object /> data
	 * @param: {Object} params - <param /> data
	 * @this: {jQuery Object}
	 * @return Object
	 * @license MIT
	 * @date: Mon Apr 02 23:00:00 2012
	 **/

	$.fn.embed = function (object, params) {
		var is = function(object) {
			return !$.isPlainObject(object) || $.isEmptyObject(object);
		},

		//extend default params
		object = $.extend({
			type: 'application/x-shockwave-flash',
			data: ''
		}, object);

		if (is(object) && !data)
			return this;

		var param = [];

		//add <param /> elements
		$.each($.extend({movie: object.data}, params), function(name, value) {
			param.push('<param name="' + name + '" value="' + value + '" />');
		});

		//create <object /> elements
		$('<object />', object).appendTo(this).attr('data', object.data).append(param.join(''));

		return this;
	};
})(jQuery);