import React from 'react';
import PropTypes from 'prop-types';
import './SideBarDrawer.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SideBarList from '../SideBarList/SideBarList.js';


const SideBarDrawer = (props) => {
	const {show, children, passQuery, passVenues, listItemClick} = props;

	// Render nothing if the 'show' prop is false
	if (!show) {
		return null;
	}

	return (

		<nav id="drawer" className="modal-style">
			{children}

			<SearchBar passQuery={passQuery}/>

			<SideBarList passVenues={passVenues}
						 listItemClick={listItemClick}/>

		</nav>

	);
};


SideBarDrawer.propTypes = {
	show: PropTypes.bool,
	children: PropTypes.node,
	passVenues: PropTypes.array.isRequired
};


export default SideBarDrawer;
