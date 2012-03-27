$(function() {
	var position = function() {
		var offset = $(this).offset();
		$('#top').val((offset.top|0) + 'px');
		$('#left').val((offset.left|0) + 'px');
	};

	//Axis: xy
	$('#xy').draggable({
		prevent: ['input'],
		callback: {
			start: position,
			end: position
		},
		overflow: true
	});

	//Axis: y
	$('#x').draggable({axis: 'x'});

	//Axis: y
	$('#y').draggable({
		axis: 'y',
		overflow: true
	});
});
