import React, { Component } from 'react';
import './App.css';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon.js';
import SideBarDrawer from '../SideBarDrawer/SideBarDrawer.js';
import { load_google_maps, load_places } from '../Utils/Utils.js';
// import Map from '../Map/Map.js';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { isOpen: true };
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
				let venues = values[1].response.venues;

				this.google = google;
				this.markers = [];
				this.infowindow = new google.maps.InfoWindow();
				this.map = new google.maps.Map(document.getElementById('map'), {
					zoom: 15,
					scrollwheel: true,
					center: {lat: venues[0].location.lat, lng: venues[0].location.lng}
				});

				venues.forEach(venue => {
					let marker = new google.maps.Marker ({
						position: {lat: venue.location.lat, lng: venue.location.lng},
						map: this.map,
						venue: venue,
						id: venue.id,
						name: venue.name,
						animation: google.maps.Animation.DROP
					});

					this.markers.push(marker);
				});

			})
	}


	filterVenues = (query) => {
		console.log(query);
		this.markers.forEach(marker => {
			marker.name.toLowerCase().includes(query.toLowerCase()) === true ?
				marker.setVisible(true) :
				marker.setVisible(false);
		});


		// this.setState({ query: query})
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

			  />
				<section class="map-container">
			  <div id="map"></div>
				</section>

		  </main>

      </div>
    );
  }
}


export default App;
