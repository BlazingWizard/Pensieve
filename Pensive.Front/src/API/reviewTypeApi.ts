import createApi from './createApi';
import { ReviewType } from './types';

const reviewTypeApi = createApi<ReviewType>(`reviews/types`);

function getAll(): Promise<Array<ReviewType>> {
  return reviewTypeApi.get('');
}

function getByCode(code: string): Promise<ReviewType> {
  return reviewTypeApi.get(code);
}

export default { getAll, getByCode };
