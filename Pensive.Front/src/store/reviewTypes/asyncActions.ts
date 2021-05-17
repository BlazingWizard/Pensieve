import reviewTypeApi from '../../API/reviewTypeApi';
import { Dispatch } from '../types';
import { getAllReviewTypes } from './actionCreators';

async function getAllReviewTypesAction(dispatch: Dispatch): Promise<void> {
  const reviewTypes = await reviewTypeApi.getAll();
  dispatch(getAllReviewTypes(reviewTypes));
}

// eslint-disable-next-line import/prefer-default-export
export { getAllReviewTypesAction };
