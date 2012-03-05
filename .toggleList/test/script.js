$(function() {
	var callback = function(target, i) {
		target.css('background', ['#CEEDF1', '#3DDD80', '#ECFF6A'][i]);
	};

	//example 1
	$('.one .ul1 > li').toggleList({
		target: $('.one .ul2 > li'),
		callback: callback
	});

	//example 2
	$('.two .ul1 > li').toggleList({
		target: $('.two .ul2 > li'),
		event: 'mouseover',
		type: 'class',
		callback: callback
	});
});
