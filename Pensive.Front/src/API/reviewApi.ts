import createApi from './createApi';
import { Review } from './types';

const reviewApi = createApi<Review>('reviews');

function getAll(): Promise<Array<Review>> {
  return reviewApi.get('');
}

function get(id: number): Promise<Review> {
  return reviewApi.get(id.toString());
}

function del(id: number): Promise<undefined> {
  return reviewApi.del(id.toString());
}

function create(review: Review): Promise<Review> {
  return reviewApi.post('', review);
}

function update(review: Review): Promise<undefined> {
  return reviewApi.put(review.id.toString(), review);
}

export default { get, getAll, del, create, update };
