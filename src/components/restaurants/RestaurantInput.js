import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    console.log("submitting")
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      text: this.state.text,
    })
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleOnChange} value={this.state.text}></input>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
