(function ($) {
	/**
	 * $.fn.toggleType()
	 * Use:
	 * $('.checkbox').click(function() {
	 *		$(this).toggleType($('.password'));
	 * });
	 *
	 * $('.checkbox').click(function() {
	 *  	$(this).toggleType({
	 * 		   element : $('.password'),
	 * 		   type: 'button',
	 *			callback : function(obj) {
	 *				return obj.is(":checked") ? 'text' : 'password';
	 *			},
	 *			toggle : false
	 *		});
	 *	});
	 *
	 * Licensed under the MIT
	 *
	 * @author: Alexander Guinness
	 * @version: 1.0
	 * @option: {type} New type [optional]
	 * @option: {element} Target Element [optional]
	 * @option: {callback} Callback [optional]
	 * @this: {jQuery Object}
	 * @return: {jQuery Object}
	 * @date: San Jun 11 18:37:00 2011
	 **/

	$.fn.toggleType = function (options) {
		var params = $.extend({
			type: 'text',
			element : null,
			callback : null
		}, options),

		target = params.element || options;

		target.before(
			target.clone().prop(
				'type', function (self) {
					var status = self.data('status') === 'checked';

					if (params.callback)
						params.callback(self);

					//set default type
					if (typeof params.callback === 'function')
						self.data('type', target.prop('type'));

					//toggle type
					self.data('status', status ? '' : 'checked');

					return status;

				}(this) ? this.data('type') : params.type
			)
		).remove();

		return this;
	};
})(jQuery);

