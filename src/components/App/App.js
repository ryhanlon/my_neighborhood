import React, { Component } from 'react';
import './App.css';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon.js';
import SideBarDrawer from '../SideBarDrawer/SideBarDrawer.js';
import { load_google_maps, load_places } from '../Utils/Utils.js';
import SideBarList from "../SideBarList/SideBarList";
// import Map from '../Map/Map.js';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: true,
			filteredVenues: ''
		};
	}

	toggleSideBarDrawer = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	componentDidMount() {
		let googleMapsPromise = load_google_maps();
		let placesPromise = load_places();

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
	}

	listItemClick = (venueId) => {
		let marker = this.markers.filter(m => m.id === venueId)[0];
		console.log(this.markers);

		this.infowindow.setContent(marker.name);
		this.map.setCenter(marker.position);
		this.infowindow.open(this.map, marker);
		this.map.panBy(0, -125);

		if (marker.getAnimation() !== null) { marker.setAnimation(null); }
		else { marker.setAnimation(this.google.maps.Animation.BOUNCE); }
		setTimeout(() => { marker.setAnimation(null) }, 1500);
	};


	filterVenues = (query) => {
		// Filtered version of venues
		let filteredList = this.venues.filter( venue => venue.name.toLowerCase().includes(query.toLowerCase()) );

		this.markers.forEach(marker => {
			marker.name.toLowerCase().includes(query.toLowerCase()) === true ?
				marker.setVisible(true) :
				marker.setVisible(false);
		});

		this.setState({ filteredVenues: filteredList, query });
	};


	render() {
    return (
      <div className="App">
		  <header className="site-header" role="menu" aria-label="site-navigation">
			  <h1 className="site-name">My Neighborhood</h1>
			  <HamburgerIcon onClick={this.toggleSideBarDrawer}
			  				changeHamburger={this.state.isOpen}
			  />

		  </header>

		  <main>
			  <SideBarDrawer show={this.state.isOpen}
							 onClose={this.toggleSideBarDrawer}
							 passQuery = {this.filterVenues}
							 passVenues = {this.state.filteredVenues}
				  			 listItemClick={this.listItemClick}

			  />
			  	<section className="map-container">
			  		<div id="map"></div>
				</section>

		  </main>

      </div>
    );
  }
}


export default App;
