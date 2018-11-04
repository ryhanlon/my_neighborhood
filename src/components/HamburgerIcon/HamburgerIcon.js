import React, { Component } from 'react';
import './HamburgerIcon.css';


class HamburgerIcon extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="menu" className="proj-list">
				<a>
				  <div className="" onClick={this.props.onClick}>

					  <div className={this.props.changeHamburger ? "hamburger change1 bar1" : "hamburger bar1"}></div>
					  <div className={this.props.changeHamburger ? "hamburger change2 bar2" : "hamburger bar2"}></div>
					  <div className={this.props.changeHamburger ? "hamburger change3 bar3" : "hamburger bar3"}></div>

				  </div>
				</a>
			</div>

		);
	}
}




export default HamburgerIcon;
