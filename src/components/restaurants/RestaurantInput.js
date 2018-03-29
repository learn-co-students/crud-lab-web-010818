import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      text: this.state.text
    })
    this.setState({
      text:''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Restaurant</label>
          <input type='text' value={this.state.text} onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
