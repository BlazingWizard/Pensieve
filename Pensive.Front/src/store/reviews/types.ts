import Review from '../../models/Review';
import { REVIEW_ADD, REVIEW_DELETE, REVIEW_GET_ALL } from './actionTypes';

export interface GetAllReviewsAction {
  type: typeof REVIEW_GET_ALL;
  payload: Array<Review>;
}

export interface AddReviewAction {
  type: typeof REVIEW_ADD;
  payload: Review;
}

export interface DeleteReviewAction {
  type: typeof REVIEW_DELETE;
  payload: number;
}

export type ReviewAction =
  | AddReviewAction
  | GetAllReviewsAction
  | DeleteReviewAction;
