$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: true
	});
})





var map;

function initGoogleMap() {
	map = new google.maps.Map(document.getElementById('google-map'), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 8
	});
}
