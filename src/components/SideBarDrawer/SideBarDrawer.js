import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SideBarDrawer.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SideBarList from '../SideBarList/SideBarList.js';


class SideBarDrawer extends Component {

	render() {

		// Render nothing if the 'show' prop is false
		if(!this.props.show) {
			return null;
		}

    return (

		<nav id="drawer" className="modal-style">
			{this.props.children}

			<SearchBar 	passQuery={this.props.passQuery} />

			<SideBarList passVenues={this.props.passVenues}
						 listItemClick={this.props.listItemClick}/>

		</nav>

    );
  }
}


SideBarDrawer.propTypes = {
	show: PropTypes.bool,
	children: PropTypes.node
};


export default SideBarDrawer;
