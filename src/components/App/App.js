import React, { Component } from 'react';
import './App.css';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon.js';
import SideBarDrawer from '../SideBarDrawer/SideBarDrawer.js';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { isOpen: false };
	}

	toggleSideBarDrawer = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

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
			  />
		  </main>

		<h1> app</h1>
      </div>
    );
  }
}


export default App;
