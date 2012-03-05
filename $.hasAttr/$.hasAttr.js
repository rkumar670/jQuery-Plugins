(function ($) {
	/**
	 * $.hasAttr()
	 * Determine whether any of the matched elements are assigned the given attribute.
	 * Use:
	 * $('body').hasAttr('class');
	 * Licensed under the MIT
	 *
	 * @author: Alexander Guinness
	 * @version: 1.0
	 * @this: {jQuery Object}
	 * @params {attr} Attr
	 * @return Boolean
	 * @date: Fri Aug 19 13:01:00 2011
	 **/

	$.fn.hasAttr = function (attr) {
		return this.is('[' + attr + ']') || false;
	}
})(jQuery);