import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const relevantReviews = this.props.store.getState().reviews.filter(review => {
      return review.restaurantId === this.props.restaurantId
    })

    const reviews = relevantReviews.map(review => {
      return <Review review={review} key={review.id} store={this.props.store}/>
    })

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
