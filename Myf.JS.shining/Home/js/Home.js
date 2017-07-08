var products = document.getElementById('products');
var productsLi = document.getElementById('productsLi');
var productsA = document.getElementById('productsA');
var fone = document.getElementById('first-one');
var ftwo = document.getElementById('first-two');
var fthree = document.getElementById('first-three');
var ffour = document.getElementById('first-four');
var firsts = [fone, ftwo, fthree, ffour];
var lis = document.getElementsByTagName('li');

console.log(firsts);
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









$('#bleft').mouseover(function() {
	$('#bleft').stop().animate({
		opacity: 1
	})
})
$('#bleft').mouseout(function() {
	$('#bleft').stop().animate({
		opacity: 0.3
	})
})
$('#bright').mouseover(function() {
	$('#bright').stop().animate({
		opacity: 1
	})
})







$('#bright').mouseout(function() {
	$('#bright').stop().animate({
		opacity: 0.3
	})
})

var before = 0;
for(var i = 0; i < lis.length; i++) {
	lis[i].index = i;
	lis[i].onclick = function() {
		lis[before].className = "";
		firsts[before].className = "none";
		this.className = 'shining';
		firsts[this.index].className = 'block';
		before = this.index;
	}
}
$('#bleft').click(function() {
	console.log(before)
	lis[before].className = "";
	firsts[before].className = "none";
	before--;
	if(before == -1) {
		before = 3;
	}
	lis[before].className = "shining";
	firsts[before].className = "block";
})

$('#bright').click(function() {
	console.log(before)
	lis[before].className = "";
	firsts[before].className = "none";
	before++;
	if(before == 4) {
		before = 0;
	}
	lis[before].className = "shining";
	firsts[before].className = "block";
})


$('#footTop').mousedown(function() {
	$('body,html').animate({
		scrollTop: 0
	}, 600)
})