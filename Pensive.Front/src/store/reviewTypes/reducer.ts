import ReviewType from '../../models/ReviewType';
import ReviewTypeAction from './types';
import { REVIEW_TYPE_GET_ALL } from './actionTypes';

function reviewTypesReducer(
  state: Array<ReviewType> = [],
  action: ReviewTypeAction
): Array<ReviewType> {
  switch (action.type) {
    case REVIEW_TYPE_GET_ALL:
      return action.payload;
    default:
      return state;
  }
}

export default reviewTypesReducer;
