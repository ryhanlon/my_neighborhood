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
  const CLIENT_ID = 'JGXC3I3UMA1HFC401TQXSAKAIF0SY0VVUVQYJDUNHI4RLXPW';
  const CLIENT_SECRET ='5YCNS0Z3KAIDGSOCXDJG4COUM4ZY2VZH41SLAB5UJ3B2XBLT';


  let city = 'Silver Spring, MD';
  let query = 'Shopping';
  let apiURL = `https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&limit=10&${query}&${city}&v=20181102`;
  return fetch(apiURL).then(resp => resp.json())
}



// export default load_google_maps;
