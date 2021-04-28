import { REVIEW_ADD, REVIEW_DELETE, REVIEW_GET_ALL } from './types';

function reviewsReducer(state = [], action) {
  switch (action.type) {
    case REVIEW_GET_ALL:
      return action.payload;
    case REVIEW_ADD:
      return [action.payload, ...state];
    case REVIEW_DELETE:
      return state.filter((review) => review.id !== action.payload);
    default:
      return state;
  }
}

export default reviewsReducer;
