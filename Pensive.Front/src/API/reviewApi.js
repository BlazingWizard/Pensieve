import createApi from './createApi';

const reviewApi = createApi('https://localhost:5001/api/reviews');

function getAll() {
  return reviewApi.get('');
}

function get(id) {
  return reviewApi.get(id);
}

function del(id) {
  return reviewApi.del(id);
}

function create(review) {
  return reviewApi.post('', review);
}

function update(review) {
  return reviewApi.put(review.id, review);
}

export { get, getAll, del, create, update };
