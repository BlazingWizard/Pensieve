import ReviewType from '../../models/ReviewType';
import { REVIEW_TYPE_GET_ALL } from './actionTypes';

interface ReviewTypeAction {
  type: typeof REVIEW_TYPE_GET_ALL;
  payload: Array<ReviewType>;
}

export default ReviewTypeAction;
