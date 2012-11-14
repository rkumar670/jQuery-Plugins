(function ($) {
	/**
	 * $.preloadIMG()
	 * This method provides a way to preload images
	 * Use:
	 * 1. $.preloadIMG(['./img1', './img2']);
	 * 2. $.preloadIMG('./img1, ./img2');
	 *
	 * Licensed under the MIT
	 *
	 * @author: Alexander Guinness
	 * @version: 1.1
	 * @params {src} Array or String
	 * @this: {jQuery Object}
	 * @return: {jQuery Object}
	 * @date: Fri Aug 12 14:02:00 2011
	 **/

	$.preloadIMG = function(src) {
		if (typeof src === 'string')
			src = src.split(',');

		else if (!$.isArray(src))
			return this;

		//generate random id
		var namespace = '#preloadIMG' + $.expando;

		//create parent element for images
		if (!$(namespace)[0])
			$('<div />', {id: namespace.slice(1)}).hide().appendTo('body');

		//append images
		$.each(src, function () {
			$('<img />', {src: this}).appendTo(namespace);
		});

		return this;
	};
})(jQuery);
