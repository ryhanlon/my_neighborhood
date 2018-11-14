import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SideBarList.css';


class SideBarList extends Component {

	state = {
		id: ''
	};


	handleClick = (event) => {
		console.log(event.target.id);
		this.setState({
			id: event.target.id
		}, () => this.props.listItemClick(this.state.id));
	};

	render() {

		const {passVenues} = this.props;
		return (

			<ul className="content-list" aria-label="List of venues">

				{
					// Add venues to the sidebar
					passVenues && passVenues.length > 0 && passVenues.map((venue) => (
						<li className="content-item" id={venue.id} key={venue.id} role="button" tabIndex="0"
							onClick={this.handleClick}>{venue.name} <br/> ({venue.categories[0].shortName})
						</li>
					))
				}

			</ul>
		);
	}
}


SideBarList.propTypes = {
	passVenues: PropTypes.array.isRequired
};


export default SideBarList;
