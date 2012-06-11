(function($) {
	/**
	 * $.fn.sendForm
	 * Generating and submitting form fields.
	 * All fields with existing names are replaced with new fields
	 * Use:
	 * $('#form').sendForm({
	 *   a: 1,
	 *   b: 2
	 * });
	 * @author: Alexander Guinness
	 * @version: 1.1
	 * @params {Object} params - name/value
	 * @params {Boolean} send - auto mrsubmit form
	 * @this: {jQuery Object}
	 * @return: {jQuery Object}
	 * @license: MIT
	 * @date: Mon Mar 12 13:58:00 2012
	 **/
	$.fn.sendForm = function(params, send) {
		if (this[0] && $.isPlainObject(params) && !$.isEmptyObject(params))
		{
			var self = this;
			$.each(params, function(key, value) {
				var item = $('input[type="hidden"][name="' + key + '"]', self);

				if (item[0])
					item.remove();

				$('<input />', {
					type: 'hidden',
					name: key,
					value: value
				}).appendTo(self);

			});
			send && this.submit();
		}
		return this;
	};
}(jQuery));