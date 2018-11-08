import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SideBarList.css';


class SideBarList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: ''
		}
	}

	handleClick = (event) => {
		console.log(event.target.id);
		this.setState({
			id: event.target.id
		}, () => this.props.listItemClick(this.state.id));
	};

	render() {
		return (

			<ul className="content-list">

			{
				// Add venues to the sidebar
				this.props.passVenues && this.props.passVenues.length > 0 && this.props.passVenues.map((venue) => (
						<li className="content-item" id={venue.id} key={venue.id}
							onClick={this.handleClick}>{venue.name}</li>
				))
			}

			</ul>
		);
	}
}


SideBarList.propTypes = {
	passVenues: PropTypes.array
};


export default SideBarList;
