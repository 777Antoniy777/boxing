import { combineReducers } from 'redux';
import user from './user/user.reducer';
import counter from './counter/counter.reducer';

export const rootReducer = combineReducers({
  user,
  counter,
});



