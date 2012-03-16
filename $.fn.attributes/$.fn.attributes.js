(function ($) {
	/**
	 * $.fn.attributes()
	 * Returns an unsorted {object} of the attributes
	 * Use:
	 * <div data-attr="foo" class="bar" />
	 * $('#id').attributes();
	 * {
	 * 		data-attr: 'foo',
	 * 		class: 'bar'
	 * }
	 * Licensed under the MIT
	 * @author: Alexander Guinness
	 * @version: 1.0
	 * @this: {jQuery Object}
	 * @return Object
	 * @date: Wed Jun 15 13:00:00 2011
	 **/

	$.fn.attributes = function () {
		if ($.type(this) !== 'object')
			return this;

		var object = {};

		$.each(this[0].attributes, function() {
			object[this.nodeName] = this.nodeValue;
		});

		return object;
	};
})(jQuery);
