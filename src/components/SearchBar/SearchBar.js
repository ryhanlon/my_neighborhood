import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';


class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			query: ''
		}
	}

	handleQuery = (event) => {
		this.setState({
		   query: event.target.value.trim()
		}, () => this.props.passQuery(this.state.query));
	   };


	render() {
		const { query } = this.state;

		return (
			<div>
			<form>
				<label htmlFor="search-field">
					<input type="text"
							id="search-field"
							role="searchbox"
							placeholder="Filter content"
							value={query}
						   onChange={this.handleQuery}
							/>
				</label>
			</form>

			</div>
		);
	}
}


SearchBar.propTypes = {
	onChange: PropTypes.func
};


export default SearchBar;
