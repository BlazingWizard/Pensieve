import { combineReducers, createStore } from 'redux';

import reviewsReducer from './reviews/reducer';
import reviewTypesReducer from './reviewTypes/reducer';

const store = createStore(
  combineReducers({
    reviews: reviewsReducer,
    reviewTypes: reviewTypesReducer
  }),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
