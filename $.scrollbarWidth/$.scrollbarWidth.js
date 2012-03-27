(function ($) {
	/**
	* $.scrollbarWidth()
	* A jQuery plugin to retrieve the width of a browser scrollbar.
	* Use:
	* $.scrollbarWidth()
	* @author: Alexander Guinness
	* @version: 1.0
	* @return: {Number}
	* @license: MIT
	* @date: Mon Aug 14 13:16:00 2012
	**/
	$.scrollbarWidth = function () {
		var scrollbar = $('<p />', {
			css: {
				width: '100px',
				height: '100px',
				overflow: 'scroll',
				position: 'absolute',
				top: '-10000px'
			}
		}).appendTo('body'),

		width = scrollbar.outerWidth() - scrollbar[0].clientWidth;
		scrollbar.remove();
		return width;
	};
})(jQuery);
