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

	handleQuery = (event) => {
		this.setState({
		   query: event.target.value
		}, () => this.props.passQuery(this.state.query));
	   };

	render() {
		// const { query } = this.state;

		return (
			<form>
				<label>
					<input type="text"
							id="search field"
							role="searchbox"
							placeholder="Search by title or author"
							value={this.state.query}
						   onChange={this.handleQuery}
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
