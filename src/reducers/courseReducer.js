import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  if (action.type === types.LOAD_COURSES_SUCCESS) {
    return action.courses;
  }
  else if (action.type === types.CREATE_COURSES_SUCCESS) {
    return [
      ...state, Object.assign({}, action.course)
    ];
  }
  else if (action.type === types.UPDATE_COURSES_SUCCESS) {
    return [
      ...state.filter(course => course.id !== action.course.id),
      Object.assign({}, action.course)
    ];
  }
  else {
    return state;
  }
}

