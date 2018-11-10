import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Map.css';
import {load_google_maps, load_places} from "../Utils/Utils";


class Map extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		let googleMapsPromise = load_google_maps();
		let placesPromise = load_places(this.props.currentLat, this.props.currentLng);
		console.log(this.props.currentLat);

		Promise.all([
			googleMapsPromise,
			placesPromise
		])
			.then(values => {
				console.log(values);

				let google = values[0];
				this.venues = values[1].response.venues;

				this.google = google;
				this.markers = [];
				this.infowindow = new google.maps.InfoWindow();
				this.map = new google.maps.Map(document.getElementById('map'), {
					zoom: 15,
					scrollwheel: true,
					center: {lat: this.venues[0].location.lat, lng: this.venues[0].location.lng}
				});

				//
				this.venues.forEach(venue => {
					let marker = new google.maps.Marker ({
						position: {lat: venue.location.lat, lng: venue.location.lng},
						map: this.map,
						venue: venue,
						id: venue.id,
						name: venue.name,
						animation: google.maps.Animation.DROP
					});

				// Set animation to null, then add the Bounce animation and time
				marker.addListener('click', () => {
					if (marker.getAnimation() !== null) { marker.setAnimation(null); }
					else { marker.setAnimation(google.maps.Animation.BOUNCE); }
					setTimeout(() => { marker.setAnimation(null) }, 1500);
				});

					// Add infowindow
				google.maps.event.addListener(marker, 'click', () => {
					this.infowindow.setContent(marker.name);
					this.map.setCenter(marker.position);
					this.infowindow.open(this.map, marker);
					this.map.panBy(0, -125);
				});

					this.markers.push(marker);
				});

				this.setState({ filteredVenues: this.venues });
			})
	};

	render() {
		return (
			<div id="map"></div>
		);
	}
}


export default Map;
