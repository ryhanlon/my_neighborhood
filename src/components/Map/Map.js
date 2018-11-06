import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Map.css';


class Map extends Component {

	// componentDidMount = () => {
	// 	let map = new google.maps.Map(document.getElementById('map'), {
	// 	  center: {lat: -34.397, lng: 150.644},
	// 	  zoom: 8
	// 	});
	// };

	render() {
		return (
			<div id="map"></div>
		);
	}
}


export default Map;
