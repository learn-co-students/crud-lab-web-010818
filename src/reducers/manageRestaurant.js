
import cuid from 'cuid';
export const cuidFn = cuid;

let restaurantId = 0;
let reviewId = 0;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      restaurantId++;
      const restaurants = [...state.restaurants, { id: restaurantId, text: action.text }]
      return Object.assign({}, state, {restaurants: restaurants})
    case 'DELETE_RESTAURANT':
      return Object.assign({}, state, {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)})
    case 'ADD_REVIEW':
      reviewId++
      const reviews = [...state.reviews, { id: reviewId, text: action.text, restaurantId: action.restaurantId }]
      return Object.assign({}, state, {reviews: reviews})
    case 'DELETE_REVIEW':
      return Object.assign({}, state, {reviews: state.reviews.filter(review => review.id !== action.id)})
    default:
      return state
  }

}
