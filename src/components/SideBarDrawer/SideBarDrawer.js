import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SideBarDrawer.css';


class SideBarDrawer extends Component {

	render() {

		// Render nothing if the 'show' prop is false
		if(!this.props.show) {
			return null;
		}

    return (

		<nav id="drawer" className="modal-style">
			{this.props.children}

		  <ul className="nav-list">
			  <li className="nav-item">location 1</li>
			  <li className="nav-item">location 2</li>
			  <li className="nav-item">location 3</li>
			  <li className="nav-item">location 4</li>
		  </ul>

		</nav>

    );
  }
}


SideBarDrawer.propTypes = {
	onClose: PropTypes.func.isRequired,
	show: PropTypes.bool,
	children: PropTypes.node
};

export default SideBarDrawer;
