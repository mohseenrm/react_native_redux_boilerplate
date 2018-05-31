import { combineReducers } from 'redux';

import countReducer from './countReducer';
import testReducer from './testReducer';

export default combineReducers({
  counter: countReducer,
  meta: testReducer,
});
