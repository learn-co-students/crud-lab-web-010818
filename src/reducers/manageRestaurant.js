
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = { ...action.restaurant, id: cuidFn()}
      return {...state, restaurants: [...state.restaurants, restaurant]}
    case 'DELETE_RESTAURANT':
      return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
    case 'ADD_REVIEW':
      const review = { ...action.review, id: cuidFn()}
      return {...state, reviews: [...state.reviews, review]}
    case 'DELETE_REVIEW':
      return {...state, reviews: state.reviews.filter( review => review.id !== action.id)}
    default:
      return state
  }
}

// import cuid from 'cuid';
// export const cuidFn = cuid;
//
// export default function manageRestaurants(state = {
//   restaurants: [],
//   reviews: [],
// }, action) {
//   switch (action.type) {
//
//     case 'ADD_RESTAURANT':
//       const restaurant = { text: action.restaurant.text, id: cuidFn() };
//       return Object.assign({}, state, {
//         restaurants: state.restaurants.concat(restaurant),
//       });
//
//     case 'DELETE_RESTAURANT':
//       const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
//       return Object.assign({}, state, { restaurants });
//
//     case 'ADD_REVIEW':
//       const review = Object.assign({}, action.review, { id: cuidFn() });
//       return Object.assign({}, state, {
//         reviews: state.reviews.concat(review),
//       });
//
//     case 'DELETE_REVIEW':
//       const reviews = state.reviews.filter(review => review.id !== action.id);
//       return Object.assign({}, state, { reviews });
//
//     default:
//       return state;
//
//   }
// };
