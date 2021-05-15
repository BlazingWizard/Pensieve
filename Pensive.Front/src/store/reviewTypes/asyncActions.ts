import reviewTypeApi from '../../API/reviewTypeApi';
import { getAllReviewTypes } from './actionCreators';

async function getAllReviewTypesAction(dispatch) {
  const reviewTypes = await reviewTypeApi.getAll();
  dispatch(getAllReviewTypes(reviewTypes));
}

// eslint-disable-next-line import/prefer-default-export
export { getAllReviewTypesAction };
