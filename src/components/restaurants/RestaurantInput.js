import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text
      }
    })
    this.setState({
      text: ''
    })
  }

  handleChange = (event) => {
    this.setState({text: event.target.value}, ()=> console.log(this.state))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="text" onChange={this.handleChange} value={this.state.text}/>
        <input type="submit"/>
      </form>
    );
  }
};

export default RestaurantInput;
