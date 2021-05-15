import Review from '../../models/Review';
import { REVIEW_ADD, REVIEW_DELETE, REVIEW_GET_ALL } from './actionTypes';

interface AddReviewAction {
  type: typeof REVIEW_GET_ALL;
  payload: Array<Review>;
}

interface GetAllReviewsAction {
  type: typeof REVIEW_ADD;
  payload: Review;
}

interface DeleteReviewAction {
  type: typeof REVIEW_DELETE;
  payload: number;
}

type ReviewAction = AddReviewAction | GetAllReviewsAction | DeleteReviewAction;

export default ReviewAction;
