
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
    console.log(action.restaurant.text);
      let restaurant =  { text: action.restaurant.text, id: cuid() };
      return {...state, restaurants: state.restaurants.concat(restaurant)}
      break;
    default:

  }
}
