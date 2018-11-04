import React, { Component } from 'react';
import './HamburgerIcon.css';


class HamburgerIcon extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="menu" className="header-menu proj-list">
				<a>
				  <div className="menu-container" onClick={this.menuClick}>
					  <div className="bar1"></div>
					  <div className="bar2"></div>
					  <div className="bar3"></div>
				  </div>
				</a>
			</div>

		);
	}
}




export default HamburgerIcon;
