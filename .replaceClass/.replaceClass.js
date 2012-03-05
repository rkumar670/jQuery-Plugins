(function ($) {
	/**
	* $.fn.replaceClass()
	* Replace each class name in the set of matched elements
	* Use:
	*
	* Replace class itself:
	* $('.class').replaceClass('new_class');
	*
	* Replace one class with another:
	* $('.class').replaceClass('old_class', 'new_class');
	*
	* Replace the list of classes:
	* $('.class').replaceClass('old_class1 old_class2', 'new_class1 new_class2');
	*
	* Licensed under the MIT
	*
	* @author: Alexander Guinness
	* @version: 1.0
	* @this: {jQuery Object}
	* @date: Sun Aug 01 18:45:00 2010
	**/

	$.fn.replaceClass = function (original, recent) {
		if (original || original)
			this.removeClass(recent ? original : this.className).addClass(recent || original);
		return this;
	}
})(jQuery);
