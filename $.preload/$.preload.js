(function ($) {
	/**
	 * $.preload()
	 * This method provides a way to preload images
	 * Use:
	 * 1. $.preload(['./img1', './img2']);
	 * 2. $.preload('./img1, ./img2');
	 *
	 * Licensed under the MIT
	 *
	 * @author: Alexander Guinness
	 * @version: 1.0
	 * @params {src} Array or String
	 * @this: {jQuery Object}
	 * @return: {jQuery Object}
	 * @date: Fri Aug 12 14:02:00 2011
	 **/

	$.preload = function(src) {
		if ($.type(src) === 'string')
			src = src.split(',');

		else if (!$.isArray(src))
			return this;

		//generate random id
		var id = '#preload' + Math.random().toString().match(/\d{1,}/g)[1];

		//create parent element for images
		!$(id)[0] && $('<div />', {id: id.slice(1)}).hide().appendTo('body');

		//append images
		$.each(src, function () {
			$('<img />', {src: this}).appendTo(id);
		});
		return this;
	};
})(jQuery);
