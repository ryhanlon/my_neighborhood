import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SideBarList.css';


class SideBarList extends Component {

	render() {
		return (
			<div>
			{
				this.props.passVenues && this.props.passVenues.length > 0 && this.props.passVenues.map((venue) => (
					<ul className="conent-list" key={venue.id}>
						<li className="content-item">{venue.name}</li>
					</ul>
				))
			}
			</div>
		);
	}
}


SideBarList.propTypes = {
	passVenues: PropTypes.array
};


export default SideBarList;
