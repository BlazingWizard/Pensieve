import { createStore } from 'redux';

import reviewsReducer from './reviews/reducer';

const store = createStore(
  reviewsReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
