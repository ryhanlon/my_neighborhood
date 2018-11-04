import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HamburgerIcon.css';


class HamburgerIcon extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="menu" className="proj-list" onClick={this.props.onClick}>
				<div className={this.props.changeHamburger ? "hamburger change1 bar1" : "hamburger bar1"}></div>
				<div className={this.props.changeHamburger ? "hamburger change2 bar2" : "hamburger bar2"}></div>
				<div className={this.props.changeHamburger ? "hamburger change3 bar3" : "hamburger bar3"}></div>
			</div>

		);
	}
}


HamburgerIcon.propTypes = {
	onClick: PropTypes.func.isRequired,
	changeHamburger: PropTypes.bool.isRequired
};


export default HamburgerIcon;
