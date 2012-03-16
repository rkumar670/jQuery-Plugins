(function ($) {
	/**
	 * $.fn.exist()
	 * Filters elements of an array and returns only the existing HTML Elements
	 * Use:
	 * $(['#foo', '#bar', 'etc..']).exists();
	 *
	 * Licensed under the MIT
	 *
	 * @author: Alexander Guinness
	 * @version: 1.0
	 * @this: {jQuery Object}
	 * @return: {Array}
	 * @date: Thu Dec 01 16:32:00 2011
	 **/

	$.fn.exists = function() {
		return $.grep(this, function(element) {
			return $(element)[0];
		});
	};
})(jQuery);