(function($) {
	/**
	 * $.fn.toggleValue()
	 * Use: $('#input).toggleValue();
	 *
	 * @author: Alexander Guinness
	 * @version: 1.0
	 * @this: {jQuery Object}
	 * @return: {jQuery Object}
	 * @license: MIT License
	 * @date: Fri Jul 01 00:00:00 2011
	 **/
	$.fn.toggleValue = function() {
		this.bind('focus blur', function() {
			this.value = function(value, optional) {
				return value == optional ? '' : value || optional;
			}(this.value, this.defaultValue);
		});
		return this;
	};
})(jQuery);
