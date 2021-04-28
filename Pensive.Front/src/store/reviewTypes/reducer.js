import { REVIEW_TYPE_GET_ALL } from './types';

function reviewTypesReducer(state = [], action) {
  switch (action.type) {
    case REVIEW_TYPE_GET_ALL:
      return action.payload;
    default:
      return state;
  }
}

export default reviewTypesReducer;
