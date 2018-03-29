import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.store.getState().reviews.filter(review => {
      return review.restaurantId === this.props.restaurantId
    })
    const reviewLis = reviews.map(review => {
      return <Review review={review} store={this.props.store} key={review.id}/>
    })
    return (
      <ul>
        {reviewLis}
      </ul>
    );
  }
};

export default Reviews;
