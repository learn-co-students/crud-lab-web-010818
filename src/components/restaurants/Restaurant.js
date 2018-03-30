import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  handleDelete = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }

  render() {
    const { text, id } = this.props.restaurant
    return (

      <li>
        {text}
        <br></br>
        <button onClick={this.handleDelete}>Delete</button>
        <ReviewInput restaurantId={id} store={this.props.store}/>
      </li>

    );
  }
};

export default Restaurant;
