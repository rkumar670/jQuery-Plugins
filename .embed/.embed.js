(function ($) {
	/**
	 * $.fn.embed()
	 * Returns a cross-browser <object /> tag to embed the flash video in html code
	 * Use:
	 * $('body').embed({
			name: 'foo',
			id: 'foo',
			html: '<param value="always" name="AllowScriptAccess">',
			data: './file.swf',
			width: '100',
			height: '100'
	 * });
	 *
	 * @author: Alexander Guinness
	 * @version: 1.0
	 * @param: {Object} options
	 * @this: {jQuery Object}
	 * @return Object
	 * @license MIT
	 * @date: Mon Apr 02 23:00:00 2012
	 **/

	$.fn.embed = function (options) {
		if (!$.isPlainObject(options) || $.isEmptyObject(options))
			return this;

		var params = $.extend({
			type: 'application/x-shockwave-flash',
			data: ''
		}, options);

		if (params.data) {
			$('<object />', params).appendTo(this).attr('data', params.data)
			.append('<param value="' + params.data + '" name="movie" />');
		}

		return this;
	};
})(jQuery);
