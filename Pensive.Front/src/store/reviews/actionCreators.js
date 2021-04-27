import { REVIEW_ADD, REVIEW_DELETE, REVIEW_GET_ALL } from './types';

function getAllReviews(reviews) {
  return {
    type: REVIEW_GET_ALL,
    payload: reviews
  };
}

function addReview(review) {
  return {
    type: REVIEW_ADD,
    payload: review
  };
}

function deleteReview(id) {
  return {
    type: REVIEW_DELETE,
    payload: id
  };
}

export { getAllReviews, addReview, deleteReview };
