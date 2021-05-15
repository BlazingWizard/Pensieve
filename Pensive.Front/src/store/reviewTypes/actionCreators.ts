import ReviewType from '../../models/ReviewType';
import ReviewTypeAction from './types';

import { REVIEW_TYPE_GET_ALL } from './actionTypes';

function getAllReviewTypes(reviewTypes: Array<ReviewType>): ReviewTypeAction {
  return {
    type: REVIEW_TYPE_GET_ALL,
    payload: reviewTypes
  };
}

// eslint-disable-next-line import/prefer-default-export
export { getAllReviewTypes };
