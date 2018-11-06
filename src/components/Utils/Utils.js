import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Utils.css';


export function load_google_maps() {
  return new Promise(function(resolve, reject) {
    // define the global callback that will run when google maps is loaded
    window.resolveGoogleMapsPromise = function() {
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
}

export function load_places() {
  const CLIENT_ID = '';
  const CLIENT_SECRET ='';


  let city = 'Silver Spring, MD';
  let query = 'Shopping';
  let apiURL = `https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&limit=10&${query}&${city}&v=20181102
`;
  fetch(apiURL)
      .then(resp => console.log(resp.json()))
}



export default load_google_maps;
