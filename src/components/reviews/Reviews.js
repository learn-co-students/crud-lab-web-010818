import React, { Component } from 'react';
import Review from './Review';
import cuid from 'cuid';
export const cuidFn = cuid;

class Reviews extends Component {

  render() {
    const filteredReviews = this.props.store.getState().reviews.filter( review => review.restaurantId === this.props.restaurantId )
    const reviews = filteredReviews.map( review => <Review review={review} key={cuidFn()} store={this.props.store}/> )
    return (
      <ul>
        {reviews}
      </ul>
    )
  }
}

export default Reviews;
