(function ($) {
	/**
	 * $.toggleList()
	 * This module provides the .toggleList() method that binds two blocks by event
	 * Use:
	 * $('#div ul li > a').toggleList($('#div > div'));
	 * Licensed under the MIT
	 *
	 * @author: Alexander [Guinness] Abashkin
	 * @version: 1.0
	 * @option {target} Elements for toggle
	 * @option {event} Event <click> event used by default
	 * @option {callback} Callback function
	 * @option {prevent} Cancel event.preventDefault();
	 * @this: {jQuery Object}
	 * @date: Thu Aug 04 17:20:00 2011
	 **/

	$.fn.toggleList = function (options) {
		var params = $.extend({
			target: null,
			event: 'click',
			type: 'index',   //[index, class]
			callback: null,  //[this, event, index]
			prevent: true,
		}, options);

		if (!params.target)
			return this;

		this.each(function (i) {
			$(this)[params.event](function (event) {

				if (!params.prevent)
					event.preventDefault();

				var target = params.type === 'class' ?
					params.target.parent().find('.' + this.className) :
					params.target.eq(i);

				target.show().siblings(params.target[0].nodeName).hide();

				if ($.isFunction(params.callback))
					params.callback.call(this, target, i);
			});
		});
		return this;
	}
})(jQuery);