import React, { Component } from 'react';
import './App.css';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon.js';
import SideBarDrawer from '../SideBarDrawer/SideBarDrawer.js';
import { load_google_maps, load_places } from '../Utils/Utils.js';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			latitude: '',
			longitude: '',
			isOpen: true,
			filteredVenues: []
		};
	}

	componentDidMount() {
		const location = window.navigator && window.navigator.geolocation;

		if (location) {
			location.getCurrentPosition((position) => {
				this.setState({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude
				}, () => this.loadMap())
			}, (error) => {
				alert("Unable to find your current location. Try again later.");
				console.log(error);
			})
		}

	};

	toggleSideBarDrawer = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	loadMap = () => {

		// Call functions and assign to variable
		let googleMapsPromise = load_google_maps();
		let placesPromise = load_places(this.state.latitude, this.state.longitude);

		// Resolve promises
		Promise.all([
			googleMapsPromise,
			placesPromise
		])
			// Sort through data and build infowindows
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

				// Google maps function for authentication error. Used .catch() instead
				// function gm_authFailure() {
				// 	alert("Unable to load map.  Try again later.");
				// }

				// Info object for markers
				this.venues.forEach(venue => {
					let marker = new google.maps.Marker ({
						position: {lat: venue.location.lat, lng: venue.location.lng},
						map: this.map,
						venue: venue,
						id: venue.id,
						name: venue.name,
						category: 'undefined' ? '' : venue.categories[0].shortName,
						address: venue.location.formattedAddress ? venue.location.formattedAddress : 'Address not available.',
						animation: google.maps.Animation.DROP
					});

				// Set animation to null, then add the Bounce animation and time
				marker.addListener('click', () => {
					if (marker.getAnimation() !== null) { marker.setAnimation(null); }
					else { marker.setAnimation(google.maps.Animation.BOUNCE); }
					setTimeout(() => { marker.setAnimation(null) }, 1500);
				});

					// Show infowindow when marker is clicked
				google.maps.event.addListener(marker, 'click', () => {
					this.infowindow.setContent(`<div class="pop-up"><span class="venue-name">${marker.name}</span><br/><span>${marker.category}</span><br/><span class="address">${marker.address}</span></div>`);

					this.map.setCenter(marker.position);
					this.infowindow.open(this.map, marker);
					this.map.panBy(0, -125);
				});

					this.markers.push(marker);
				});

				this.setState({ filteredVenues: this.venues });
			})
			// Show error message if map is unable to load.
			.catch(error =>  {
				console.log("error", error);
				alert("Oh no!  :( Try again later.");
			}
		);
	};

	listItemClick = (venueId) => {
		// When clicked, Listitems show pop-up information
		let marker = this.markers.filter(m => m.id === venueId)[0];

		// Info for pop-windows
		this.infowindow.setContent(`<div class="pop-up"><span class="venue-name">${marker.name}</span><br/><span>${marker.category}</span><br/><span class="address">${marker.address}</span></div>`);
		this.map.setCenter(marker.position);
		this.infowindow.open(this.map, marker);
		this.map.panBy(0, -125);

		// Animate pop-windows
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
			  <h1 className="site-name" tabIndex="0">My Neighborhood</h1>
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
			  	<section className="map-container" role="region" aria-labelledby="map">
			  		<div id="map"></div>
				</section>

		  </main>

      </div>
    );
  }
}


export default App;
