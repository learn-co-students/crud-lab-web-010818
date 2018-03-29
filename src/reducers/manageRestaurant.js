
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants:[], reviews:[]}, action) {
  switch(action.type) {
    case 'ADD_RESTAURANT':
      let newRest = {text:action.text, id: cuid()}
      return {...state, restaurants: [...state.restaurants, newRest]}
    case 'DELETE_RESTAURANT':
      let rests = state.restaurants.filter(rest => rest.id !== action.id)
      return {...state, restaurants: rests}
    case 'ADD_REVIEW':
      let newRev = {text:action.text, id:cuid(), restaurantId: action.restaurantId}
      return {...state, reviews: [...state.reviews, newRev]}
    case 'DELETE_REVIEW':
      let reviews = state.reviews.filter(rev => rev.id !== action.id)
      return {...state, reviews:reviews}
    default:
      return state
  }
}
