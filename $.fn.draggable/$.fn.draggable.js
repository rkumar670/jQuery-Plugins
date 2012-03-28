(function ($) {
	/**
	 * $.fn.draggable();
	 * A simple drag and drop plugin
	 * Use:
	 * $('#foo').draggable({
	 *     axis: 'x',
	 *     prevent: ['a', 'label'],
	 *     callback: {
	 *         start: function() {
	 *             alert(0);
	 *         },
	 *         end: function() {
	 *             alert(1);
	 *         }
	 *     },
	 *     overflow: true
	 * })
	 *
	 * @author: Alexander Guinness
	 * @version: 1.0
	 * @this: {jQuery Object}
	 * @param: {Object} options -
	 * {
	 *     [ axis ], [, prevent ], , overflow], [, callback { [ start ], [, end] }]
	 *  }
	 *
	 * @option: {String} axis - Dragging only one axis. Valid values are: x, y, xy (default value).
	 * @option: {Array} prevent - Prevent dragging on the specified elements. Default values are: input, select, button
	 * @option: {Object} callback - Callback with start and end prorties.
	 * @option: {Boolean} overflow - To set the css property overflow during the dragging?
	 * @license: MIT
	 * @date: Fri May 4 12:30:00 2012
	 **/
	$.fn.draggable = function (options) {
		if (!this[0])
			return this;

		var _this = this;

		var options = $.extend({
			axis: 'xy',
			prevent: ['input', 'select', 'button'],
			callback: {
				start: null,
				end: null
			},
			overflow: false
		}, options);

		var overflow = $(document.body).css('overflow');

		this.mousedown(function(_event)
		{
			//prevent right click
			if (_event.which == 3)
				return this;

			if ($(_event.target).is(options.prevent.join(',')))
				return this;

			var offset = $(this).offset();

			$(document).bind({
				mousemove: function (event) {
					var axis = {
						get: function(axis) {
							return options.axis === 'xy' || axis == {x: 'left', y: 'top'}[options.axis] ?
								this.set(axis) : _this.css(axis) + 'px';
						},
						set: function(axis) {
							var edge = {
								left: 'pageX',
								top: 'pageY'
							}[axis];
							return event[edge] - (_event[edge] - offset[axis]) + 'px';
						}
					};

					if (typeof options.callback.start === 'function')
						options.callback.start.call(_this);

					//set css property overflow
					if (options.overflow)
						document.body.style.overflow = 'hidden';

					//set axis
					_this.css({
						position: 'absolute',
						left: axis.get('left'),
						top: axis.get('top')
					})
					.unbind('mousemove');

					if (typeof $.fn.deselect === 'function')
						$.deselect();

					event.preventDefault();
				},

				mouseup: function (event) {
					$(this).unbind('mousemove mouseup');

					//restore css property overflow for body element
					if (options.overflow)
						document.body.style.overflow = overflow;

					if (typeof options.callback.end === 'function')
						options.callback.end.call(_this);
				}
			});
			_event.preventDefault();
		});
		return this;
	};

	/*!
	 * $.deselect
	 * Complex deselection
	 * Use:
	 * $(document).mousemove(function() {
	 *    $.deselect();
	 * });
	 *
	 * @author: Alexander Guinness
	 * @version: 1.0
	 * @this: {jQuery Object}
	 * @return Object
	 * @license: MIT
	 * @date: Thu Jun 27 17:26:00 2011
	 */

	$.deselect = function () {
		if (window.getSelection)
			window.getSelection().removeAllRanges();

		else if (document.selection && document.selection.clear)
			document.selection.clear();

		return this;
	};
})(jQuery);
