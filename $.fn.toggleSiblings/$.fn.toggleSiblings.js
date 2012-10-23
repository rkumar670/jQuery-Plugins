(function($) {
	/**
	 * $.fn.toggleSiblings()
	 * Adds a class for each element in the set of matched elements
	 * and removes all siblings (except active)
	 * Use:
	 * $('div').click(function() {
	 * 	return $(this).toggleSiblings('foo');
	 * });
	 * Licensed under the MIT
	 * @author: Alexander Guinness
	 * @version: 1.1
	 * @params {attr} Class name presented by String
	 * @params {element} Any attribute or tag presented by String
	 * @this: {jQuery Object}
	 * @return: {jQuery Object}
	 * @date: Fri Aug 05 14:02:00 2011
	 **/
	$.fn.toggleSiblings = function (attr, selector) {
		attr && this.addClass(attr).siblings(selector).removeClass(attr);
		return this;
	};
})(jQuery);