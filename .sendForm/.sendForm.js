/**
 * $.fn.sendForm
 * Submitting the form fields
 * Use:
 * $('#form).sendForm({
 *   a: 1,
 *   b: 2
 * });
 * @author: Alexander Guinness
 * @version: 1.0
 * @params {Object} params - name/value
 * @params {Boolean} send - auto mrsubmit form
 * @this: {jQuery Object}
 * @return: {jQuery Object}
 * @license: MIT
 * @date: Mon Mar 12 13:58:00 2012
 **/

$.fn.sendForm = function (params, send) {
	var self = this;
	if (self[0] && $.isPlainObject(params) && !$.isEmptyObject(params)) {
		$.each(params, function(key, value) {
			$('<input />', {
				type: 'hidden',
				name: key,
				value: value
			}).appendTo(self);
		});
		send && self.submit();
	}
	return this;
};
