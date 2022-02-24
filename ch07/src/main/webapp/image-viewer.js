

var imageViewer = {
	init: function() {

		window.addEventListener('load', function() {
			console.log("gdgd");
		});


		images = [
			{
				name: "국화",
				file: "Chrysanthemum.jpg"
			},
			{
				name: "사막",
				file: "Desert.jpg"
			},
			{
				name: "수국",
				file: "Hydrangeas.jpg"
			},
			{
				name: "해파리",
				file: "Jellyfish.jpg"
			},
			{
				name: "코알라",
				file: "Koala.jpg"
			},
			{
				name: "등대",
				file: "Lighthouse.jpg"
			},
			{
				name: "펭귄",
				file: "Penguins.jpg"
			},
			{
				name: "툴립",
				file: "Tulips.jpg"
			}];
	}
}


var changeImage = function() {
	var index = Math.floor(Math.random() * images.length);

	$('.image-viewer img').attr({
		alt: images[index].name,
		src: 'images/' + images[index].file
	})

}

var slideImage = function() {
	isSliding ? $('#btn-slideshow').html('슬라이드쇼 중지') : $('#btn-slideshow').html('슬라이드쇼 시작');

	if (isSliding) {
		startSlide();
	} else {
		stopSlide();
	}
	isSliding = !isSliding;
}


var startSlide = function() {

	var _this = this;
	var index = Math.floor(Math.random() * images.length);
	if (isSliding) {

		interval = setInterval(function() {
			index = Math.floor(Math.random() * images.length);
			$('.image-viewer img').attr({
				alt: images[index].name,
				src: 'images/' + images[index].file
			})
		}, 2000);

	}
}

var stopSlide = function() {
	clearInterval(interval);
}




$(function() {
	isSliding = true;
	$('#btn-change').click(changeImage);
	$('#btn-slideshow').click(slideImage);

	changeImage();
});

