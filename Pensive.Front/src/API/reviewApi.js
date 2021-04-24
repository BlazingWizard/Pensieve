import createApi from './createApi';

const reviewApi = createApi('reviews');

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

export default { get, getAll, del, create, update };
