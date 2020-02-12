import { combineReducers } from 'redux';
import usersReducer from './usersReducer';

export default combineReducers({
  movieRd: usersReducer
});
