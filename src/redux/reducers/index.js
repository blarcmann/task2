import { combineReducers } from 'redux';
import courseReducer from './courses';

export default combineReducers({
  courses: courseReducer
});