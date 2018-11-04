import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SideBarList.css';


class SideBarList extends Component {

	render() {
		return (
			<ul className="content-list">
				<li className="content-item">location 1</li>
				<li className="content-item">location 2</li>
				<li className="content-item">location 3</li>
				<li className="content-item">location 4</li>
		  	</ul>
		);
	}
}


SideBarList.propTypes = {

};


export default SideBarList;
