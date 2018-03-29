import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const restaurants = this.props.store.getState().restaurants.map(rest => {
      return <Restaurant restaurant={rest} store={this.props.store} key={rest.id}/>
    })
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
