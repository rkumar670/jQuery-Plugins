(function ($) {
	/**
	 * $.deselect()
	 * This module provides a complex deselection
	 * and can be used for drag & drop functions
	 * Use:
	 * $(document).mousemove(function() {
	 * 		$.deselect();
	 * });
	 * Licensed under the MIT
	 * @author: Alexander Guinness
	 * @version: 1.0
	 * @this: {jQuery Object}
	 * @return Object
	 * @date: Mo Jun 27 17:26:00 2011
	 **/

	$.deselect = function () {
		if (window.getSelection)
			window.getSelection().removeAllRanges();

		else if (document.selection && document.selection.clear)
			document.selection.clear();

		return this;
	};
})(jQuery);