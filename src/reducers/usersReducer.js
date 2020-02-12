import { FETCH_MOVIES,FETCH_DETAIL } from '../actions/index';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.payload
    case FETCH_DETAIL:
      return {detail:action.payload}
    default:
      return state;
  }
};
