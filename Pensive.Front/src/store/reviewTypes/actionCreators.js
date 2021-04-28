import { REVIEW_TYPE_GET_ALL } from './types';

function getAllReviewTypes(reviewTypes) {
  return {
    type: REVIEW_TYPE_GET_ALL,
    payload: reviewTypes
  };
}

// eslint-disable-next-line import/prefer-default-export
export { getAllReviewTypes };
