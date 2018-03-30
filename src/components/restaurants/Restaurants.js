import React, { Component } from 'react';
import cuid from 'cuid';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  constructor(props){
    super(props)
    console.log(this.props.store.getState())
  }
  render() {
    // const restaurants = this.props.store.getState().restaurants.map(restaurant => <Restaurant restaurant={restaurant} key={cuid()}/>)
    const { store } = this.props;
    const restaurants = store.getState().restaurants.map((restaurant, index) => {
      return <Restaurant key={index} restaurant={restaurant} store={store} />
    });
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
