import Review from '../../models/Review';
import { REVIEW_ADD, REVIEW_DELETE, REVIEW_GET_ALL } from './actionTypes';
import {
  AddReviewAction,
  GetAllReviewsAction,
  DeleteReviewAction
} from './types';

function getAllReviews(reviews: Array<Review>): GetAllReviewsAction {
  return {
    type: REVIEW_GET_ALL,
    payload: reviews
  };
}

function addReview(review: Review): AddReviewAction {
  return {
    type: REVIEW_ADD,
    payload: review
  };
}

function deleteReview(id: number): DeleteReviewAction {
  return {
    type: REVIEW_DELETE,
    payload: id
  };
}

export { getAllReviews, addReview, deleteReview };
