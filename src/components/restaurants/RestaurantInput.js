import React, { Component } from 'react';

class RestaurantInput extends Component {
	state = { name: '' };

	handleChange = e => {
		this.setState({ name: e.target.value });
	};

	render() {
		return (
			<form>
				<input
					type="text"
					placeholder="Restaurant"
					value={this.state.name}
					onChange={this.handleChange}
				/>
				<input type="submit" />
			</form>
		);
	}
}

export default RestaurantInput;
