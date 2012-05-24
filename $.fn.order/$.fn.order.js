(function ($) {
	/**
	 * $.fn.order();
	 * Specify the order of elements
	 * Use:
	 * before:
	 * <p class="a" />
	 * <p class="b" />
	 *
	 * $('.a, .b').order([1, 0])
	 *
	 * after:
	 * <p class="b" />
	 * <p class="a" />
	 *
	 * @author: Alexander Guinness
	 * @version: 1.0
	 * @this: {jQuery Object}
	 * @param: {Array} order - Contains the values that set the order of the elements.
	 * The first element of an array is actually at index 0.
	 * @license: MIT
	 * @date: Fri Jun 4 15:58:00 2012
	 **/
	$.fn.order = function(order) {
		if (!$.isArray(order) || order.length != this.length)
			return this;

		var _this = this;

		return this.each(function(index) {
			$(this).before(_this[order[index]]);
		});
	};
})(jQuery);
