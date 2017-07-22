import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
  if (action.type === types.LOAD_AUTHORS_SUCCESS) {
    return action.authors;
  } else {
    return state;
  }
}
