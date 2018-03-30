import React, { Component } from 'react';

class Review extends Component {

  handleDelete = () => {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    })
  }

  render() {
    const { text } = this.props.review
    return (
      <li>
        {text}
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
};

export default Review;
