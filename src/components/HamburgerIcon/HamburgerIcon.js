import React from 'react';
import PropTypes from 'prop-types';
import './HamburgerIcon.css';


const HamburgerIcon = ({changeHamburger, onClick}) => {

	return (
		<label htmlFor="venue-select">
			<div id="venue-select" role="button" className="proj-list" aria-label="hamburger icon" tabIndex="0"
				 title="select venue" onClick={onClick}>
				<div className={changeHamburger ? "hamburger change1 bar1" : "hamburger bar1"}></div>
				<div className={changeHamburger ? "hamburger change2 bar2" : "hamburger bar2"}></div>
				<div className={changeHamburger ? "hamburger change3 bar3" : "hamburger bar3"}></div>
			</div>
		</label>

	);
};


HamburgerIcon.propTypes = {
	onClick: PropTypes.func.isRequired,
	changeHamburger: PropTypes.bool.isRequired
};


export default HamburgerIcon;
