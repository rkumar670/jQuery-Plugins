/**
 * $.fn.outerHTML
 * Sets or retrieves the object and its content in HTML
 * Use:
 * $('body').outerHTML();
 * @author: Alexander Guinness
 * @version: 1.0
 * @this: {jQuery Object}
 * @return: HTML content
 * @license: MIT
 * @date: Mon Mar 12 22:32:00 2012
 **/

$.fn.outerHTML = function() {
	return this[0].outerHTML || $(this).wrap('<div/>').parent().html() || this;
};
