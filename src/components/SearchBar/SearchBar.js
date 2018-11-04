import React, { Component } from 'react';
// import PropTypes from 'prop-type';
import './SearchBar.css';


class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			query: ''
		}
	}

	updateQuery = (query) => {
		this.setState({ query: query})
	}

	render() {
		const { query } = this.state;

		return (
			<form>
				<label>
					<input type="text"
							id="search field"
							role="searchbox"
							placeholder="Search by title or author"
							value={query}
						   onChange={(event) => this.updateQuery(event.target.value)}
							/>
				</label>
			</form>
		);
	}
}


// SearchBar.propTypes = {
//
// };


export default SearchBar;
