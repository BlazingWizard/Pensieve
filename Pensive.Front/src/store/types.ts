import { ThunkDispatch } from 'redux-thunk';

import store from './index';
import ReviewTypeAction from './reviewTypes/types';
import { ReviewAction } from './reviews/types';

type Actions = ReviewAction | ReviewTypeAction;

export type RootState = ReturnType<typeof store.getState>;

export type Dispatch = typeof store.dispatch;

export type DispatchAsyncAction = ThunkDispatch<RootState, undefined, Actions>;
