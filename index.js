// add event listeners for pause and resume
document.addEventListener("resume", onResume, false);
document.addEventListener("pause", onPause, false);

var map;

function onPause(){
}

function onResume(){
}

//when the jQuery Mobile page is initialised
$(document).on('pageinit', function() {
	initMap();
});

//Call this function when you want to get the current position
function getPosition() {

	//navigator.geolocation.clearWatch(watchID);

	var	watchID=navigator.geolocation.watchPosition(function(position){
			locateMe(position.coords.latitude, position.coords.longitude, position.timestamp, position.coords.altitude);
		});
	};

function locateMe(lat,long,time,alti){
}

function initMap(){
	map = new google.maps.Map(document.getElementById('map'), {
  	center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
