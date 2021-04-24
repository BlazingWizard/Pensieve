import createApi from './createApi';

const reviewTypeApi = createApi(`reviews/types`);

function getAll() {
  return reviewTypeApi.get('');
}

function getByCode(code) {
  return reviewTypeApi.get(code);
}

export default { getAll, getByCode };
