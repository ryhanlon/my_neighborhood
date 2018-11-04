import React, { Component } from 'react';
import './App.css';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon.js';

class App extends Component {
	constructor(props) {
		super(props);

	}

	render() {
    return (
      <div className="App">
		  <header className="site-header" role="menu" aria-label="site-navigation">
			  <h1 className="site-name">My Neighborhood</h1>
			  <HamburgerIcon />

		  </header>

		<h1> app</h1>
      </div>
    );
  }
}

export default App;
