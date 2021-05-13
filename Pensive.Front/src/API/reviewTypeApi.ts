import createApi from './createApi';

interface ReviewType {
  name: string;
  code: string;
}

const reviewTypeApi = createApi<ReviewType>(`reviews/types`);

function getAll(): Promise<Array<ReviewType>> {
  return reviewTypeApi.get('');
}

function getByCode(code: string): Promise<ReviewType> {
  return reviewTypeApi.get(code);
}

export default { getAll, getByCode };
