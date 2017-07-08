
$('#footTop').mouseover(function() {
	$('#Topimg').stop().animate({
		'margin-top': '-35px'
	}, 300)
})

$('#footTop').mouseout(function() {
	$('#Topimg').stop().animate({
		'margin-top': '-0px'
	}, 300)
})

$('#productsA').mouseenter(function() {
	$('#productsLi').stop().animate({
		top: '50px',
		opacity: 1
	})
})
productsA.onmouseenter = function() {
	productsLi.style.display = 'block';
}

$('#productsLi').mouseleave(function() {
	$('#productsLi').stop().animate({
		top: '40px',
		opacity: 0
	})
})
productsLi.onmouseleave= function() {
	productsLi.style.display = 'none';
}
productsLi.mouseout = function(){
	console.log(4)
}



$('#footTop').mousedown(function() {
	$('body,html').animate({
		scrollTop: 0
	}, 600)
})