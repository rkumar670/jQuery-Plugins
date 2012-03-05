(function($) {
	/**
	 * $.fn.modalbox
	 * An implementation of non-standard modal window
	 * Use:
	 * $('.block').modalbox({
	 *		 title : 'Title,
	 *		 callback : null,
	 *		 fade : 1000,
	 * });
	 * Licensed under the MIT
	 *
	 * TODO:
	 * 1. add andSelf()
	 * 2. iframe support
	 * 3. css fix
	 * @author: Alexander Guinness
	 * @version: 1.0
	 * @params {title} String; [optional]
	 * @params {callback} Function [optional]
	 * @params {fade} Number [optional]
	 * @this: {jQuery Object}
	 * @return {@this}
	 * @date: Wen Jun 01 10:00:00 2011
	 **/

	$.fn.extend({
		modalbox: function (options) {
			if (!this[0])
				return this;

			var setts = $.extend({
				title: '',
				callback : null,
				fade: 400
			}, options),

			self = this,
			interval,

			modalbox = function() {
				return $('.modalbox');
			},

			wrap = function() {
				return $('.modalbox_wrap');
			},

			center = function () {
				wrap().css({
					top: ($(window).height() - wrap().outerHeight()) / 2 + 'px',
					left: ($(window).width() - wrap().outerWidth()) / 2 + 'px',
					width: self.width() + 'px'
				});

				window.setTimeout(function() {
					window.clearInterval(interval);
				}, 10);
			},

			hide = function () {
				modalbox().fadeOut(setts.fade, function() {
					$(this).remove();
				});
			};

			//create wrapper
			if (!modalbox()[0]) {
				$('<div />', {
					'class': 'modalbox',
					html: '<div class="modalbox_wrap"> \
					          <p class="modalbox_title">' + setts.title + '</p> \
					          <p class="modalbox_close" /> \
					          <div class="modalbox_content">' + this.html() + '</div> \
					       </div>'
				}).appendTo('body').fadeIn(setts.fade);
			}

			//close modalbox
			$('.modalbox_close').click(function () {
				$.isFunction(setts.callback) && setts.callback();
				hide.call(this);
			});

			$(document).keydown(function (event) {
				event.which == 27 && hide.call(this);
			});

			interval = window.setInterval(center, 10).onresize = center;

			return this;
		}
	});
})(jQuery);