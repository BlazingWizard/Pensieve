import Review from '../../models/Review';
import reviewApi from '../../API/reviewApi';
import { Dispatch } from '../types';
import { getAllReviews, addReview, deleteReview } from './actionCreators';

async function getAllReviewsAction(dispatch: Dispatch): Promise<void> {
  const reviews = await reviewApi.getAll();
  dispatch(getAllReviews(reviews));
}

function deleteReviewAction(id: number) {
  return async (dispatch: Dispatch): Promise<void> => {
    await reviewApi.del(id);
    dispatch(deleteReview(id));
  };
}

function addReviewAction(review: Review) {
  return async (dispatch: Dispatch): Promise<void> => {
    const response = await reviewApi.create(review);
    dispatch(addReview(response));
  };
}

function updateReviewAction(review: Review) {
  return async (dispatch: Dispatch): Promise<void> => {
    await reviewApi.update(review);
    dispatch(deleteReview(review.id));
    dispatch(addReview(review));
  };
}

export {
  getAllReviewsAction,
  deleteReviewAction,
  addReviewAction,
  updateReviewAction
};
