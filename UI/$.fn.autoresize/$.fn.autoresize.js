(function ($) {
	/**
	* $.fn.autoresize()
	* Autoresize text fields
	* Use:
	* $('textarea').autoresize();
	 *
	* Licensed under the MIT
	* @author: Alexander Guinness
	* @version: 1.0
	* @param {Number} height - default height
	* @this: {jQuery Object}
	* @return: {jQuery Object}
	* @date: Fri Aug 05 14:02:00 2011
	**/

	$.fn.autoresize = function(height) {
		return this.each(function()
		{
			var offset = height || (this.offsetHeight - this.clientHeight);

			$(this).on('keyup input', function() {
				$(this)
					.css({height: height || 'auto', overflow: 'hidden'})
					.css({height: (this.scrollHeight  + offset) + 'px'});
			});
		});
	};
})(jQuery);
