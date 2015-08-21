// namespace object
var myMap = {
	markers: []
};

// callback after loading google maps api
var initMap = function () {
	var mapElement = document.getElementById("mymap");
	var mapConfig = {
		center: {lat: 40.692257, lng: -73.9868285},
		zoom: 16
	};
	myMap.map = new google.maps.Map(mapElement, mapConfig);
	myMap.bounds = new google.maps.LatLngBounds();
};


// button handlers
$("#marker").on("click", function (element) {
	var lat = 40.692257 + (Math.random() * 2 - 1) * 0.001;
	var lng = -73.9868285 + (Math.random() * 2 - 1) * 0.001;
	var markerOpts = {
		title: "Bleche",
		position: {lat: lat, lng: lng},
		map: myMap.map,
		icon: "dog-side.png",
		animation: google.maps.Animation.DROP
	};
	var marker = new google.maps.Marker(markerOpts);
	var infoWindow = new google.maps.InfoWindow({
		content: "Wow, wow, wow!"
	});
	marker.addListener("click", function () {
		infoWindow.open(myMap.map, marker);
	});
	myMap.bounds.extend(marker.position);
	myMap.map.fitBounds(myMap.bounds);
	myMap.markers.push(marker);

});

$("#remove").on("click", function (element) {
	myMap.markers.forEach(function (marker) {
		marker.setMap(null);
	});
	myMap.markers.length = 0;
});




