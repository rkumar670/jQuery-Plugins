(function ($) {
	/**
	 * $.fn.swap();
	 * Swap elements
	 * Use:
	 * $('.one').swap('.two');
	 *
	 * @author: Alexander Guinness
	 * @version: 1.0
	 * @this: {jQuery Object}
	 * @params {Object} element - object that has to be swapped
	 * @license: MIT
	 * @date: Fri May 4 13:04:00 2012
	 **/
	$.fn.swap = function(element) {
		$(document.createTextNode('')).insertBefore(this).before(element.before(this)).remove();
		return this;
	};
})(jQuery);