// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Utils.css';


// Get the user's location
function getMyLocation() {
	const location = window.navigator && window.navigator.geolocation;

	if (location) {
		location.getCurrentPosition((position) => {

			let latitude = position.coords.latitude;
			let longitude = position.coords.longitude;

			load_places(latitude, longitude);

		});
	}
}

// Load Google Maps
export function load_google_maps() {
	return new Promise(function (resolve, reject) {
		// define the global callback that will run when google maps is loaded
		window.resolveGoogleMapsPromise = function () {
			// resolve the google object
			resolve(window.google);
			// delete the global callback to tidy up since it is no longer needed
			delete window.resolveGoogleMapsPromise;
		};
		// Now, Load the Google Maps API
		const script = document.createElement("script");
		const API_KEY = 'AIzaSyC5xJcC7JNJdiuspVyeL-XIJDQtu7VuXIM';
		script.src = `https://maps.googleapis.com/maps/api/js?libraries=places&key=${API_KEY}&callback=resolveGoogleMapsPromise`;
		script.async = true;
		document.body.appendChild(script);
	});

	getMyLocation();
}


// FourSquare API
export function load_places(latitude, longitude) {
	console.log(latitude, longitude);
	const CLIENT_ID = 'QQZFX4SXH5IQHZDG522JHLVDFT52O2YJVVUZZOCYNIQZRFEJ';
	const CLIENT_SECRET = 'F5MBZT2XPJBU25OUL2HNKMT1WPXRHPDCP4WLYHQH4HD3QZ3F';

	let lat = latitude;
	let lng = longitude;
	let city = 'Portland, OR';
		console.log(latitude, longitude);

	let query = 'Eating';
	let apiURL = `https://api.foursquare.com/v2/venues/search?ll=${lat},${lng}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&limit=15&${query}&${city}&v=20181102`;
	return fetch(apiURL).then(resp => resp.json())
}
