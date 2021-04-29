import reviewApi from '../../API/reviewApi';
import { getAllReviews, addReview, deleteReview } from './actionCreators';

async function getAllReviewsAction(dispatch) {
  const reviews = await reviewApi.getAll();
  dispatch(getAllReviews(reviews));
}

function deleteReviewAction(id) {
  return async (dispatch) => {
    await reviewApi.del(id);
    dispatch(deleteReview(id));
  };
}

function addReviewAction(review) {
  return async (dispatch) => {
    await reviewApi.create(review);
    dispatch(addReview(review));
  };
}

export { getAllReviewsAction, deleteReviewAction, addReviewAction };