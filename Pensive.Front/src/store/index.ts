import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import reviewsReducer from './reviews/reducer';
import reviewTypesReducer from './reviewTypes/reducer';

const store = createStore(
  combineReducers({
    reviews: reviewsReducer,
    reviewTypes: reviewTypesReducer
  }),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
