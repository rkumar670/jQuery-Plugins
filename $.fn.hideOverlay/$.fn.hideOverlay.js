(function ($) {
	/**
	* $.fn.hideOverlay([ method ], [, params ], [, callback ])
	* Hides the element by clicking on any part of the document
	* (not including the element itself) or by keydown event (escape)
	* This method is most useful for other jQuery plugins as well.
	* Use:
	*  $('#id').hideOverlay('fadeIn', 300, function() {
	*     //...
	*  });
	*
	* @param: {[String]} method - jQuery method. Default value is 'hide'
	* @param: {[mixed]} params - Optional parameter associated with the jQuery method
	* @param: {[Function]} callback - Callback function.
	* @author: Alexander Guinness
	* @version: 1.0
	* @return: {jQuery Object}
	* @license: MIT
	* @date: San Jan 01 10:00:00 2011
	**/
	$.fn.hideOverlay = function (method, params, callback) {
		if (!this[0])
			return this;

		var self = this,
		assign = function () {
			if (!self.is(':visible'))
				return this;

			return self[method || 'hide'](params || '', function() {
				if (typeof callback === 'function')
					callback.call(self);
			});
		};

		$(document).bind({
			click: function (event) {
				if (!$(event.target).andSelf().closest(self)[0])
					assign.call(this);
			},
			keydown: function (event) {
				if (event.which == 27)
					assign.call(this);
			}
		});

		return this;
	};
})(jQuery);