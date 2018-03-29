import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text:''
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.store.dispatch({
      type:'ADD_REVIEW',
      text: this.state.text,
      restaurantId: this.props.restaurantId
    })
    this.setState({
      text:''
    })
  }


  render() {
    return (
      <div>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId} />
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.text} onChange={this.handleChange} />
          <button type='submit'>Review</button>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
