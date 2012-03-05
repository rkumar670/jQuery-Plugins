(function($) {
	/**
	* $.paginator
	* Plugin for scroll pagination
	* Based on karaboz's work
	* Use:
	* $('#id').paginator({
	*	ajax : function(current, url) {
	 *	    console.log(current, url);
	 *	},
	*	pages : 100,
	*	stack : 10,
	*	current : 1,
	*	url :  window.location.href,
	* });
	* Licensed under the MIT
	*
	* @author: Alexander Guinness
	* @version: 1.0
	* @this: {jQuery Object}
	* @return Object
	* @date: Mon Jun 27 17:26:00 2011
	**/

	$.fn.paginator = function (options) {
		var params = $.extend({
			ajax: null,
			delay: 400,
			current: 1,
			markup: true,
			opacity: .8,
			pages: 50,
			stack: 10,
			url: ''
		}, options),

		_this = this,

		setts = function () {
			if (params.markup)
				_this.html(this.markup());

			this.table = $('table', _this)[0];
			this.scrollbar = $('.scrollbar', this.table)[0];
			this.thumbler = $('div', this.scrollbar)[0];
			this.init().target();
		};

		setts.prototype = {
			init: function () {
				var _init = this;

				if (params.pages <= params.stack)
					params.stack = params.pages;

				$(this.thumbler).mousedown(function (event) {
					var event = event || window.event,
						cursor = event.pageX - _init.axis;
					_init.opacity(params.opacity);

					$(document).bind({
						mousemove: function (event) {
							_init.axis = event.pageX - cursor;
							_init.target().animate = 0;
							//$.deselect();
						},
						mouseup: function () {
							_init.opacity(1).animate = 1;
							$(this).unbind('mousemove');
						}
					});

					event.preventDefault();
					event.stopPropagation();
				});

				_this.delegate('a', 'click', function (event) {
					var event = event || window.event,
						current = +$(this).text();

					params.current = current;

					if (params.ajax)
						params.ajax(current, $(this).attr('href'));

					_init.target();
					event.preventDefault();
				});

				$(this.scrollbar).mousedown(function (event) {
					_init.scroll(event || window.event).animate = 1;
				});

				return this;
			},

			markup: function () {
				var i = params.stack,
					scroll = '<div><p /></div>',
					td = '';

				if (params.pages <= i) {
					i = params.pages;
					scroll = '';
				}

				while (i--) td += '<td />';

				return '<table> \
				<tr>' + td + '</tr> \
				<tr> \
					<td colspan="' + params.stack + '"> \
						<div class="scrollbar">' + scroll + '</div> \
					</td> \
				</tr> \
			</table>';
			},

			animate: 1,

			opacity: function (i) {
				$('p', this.scrollbar).css('opacity', i);
				return this;
			},

			scope: function (a) {
				$(this.thumbler).css('width', params.stack / params.pages * 100 + '%').stop()[this.animate ? 'animate' : 'css']({
					left: this.axis + 'px'
				}, params.delay);
				return this;
			},

			scroll: function (event) {
				this.axis = (event || window.event).pageX - $(this.scrollbar).offset().left - this.thumbler.offsetWidth / 2;
				this.target();
				return this;
			},

			target: function () {
				var width = this.table.offsetWidth,
					total = params.pages,
					stack = total - params.stack,
					value = this.axis / width * total | 0;

				if (value < 1) {
					value = 1;
					this.axis = 0;
				}
				else if (value >= stack) {
					value = total - params.stack + 1;
					this.axis = width - this.thumbler.offsetWidth;
				}

				this.scope();

				$('tr:eq(0) td', this.table).each(function (i) {
					var text = value + i;
					$(this).html(text == params.current ? '<p>' + text + '</p>' : '<a href="' + params.url + text + '">' + text + '</a>');
				});

				return this;
			}
		};
		return this[0] ? new setts() : this;
	};
})(jQuery);