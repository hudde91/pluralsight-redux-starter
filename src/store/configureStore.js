import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';
import reduxImmutableStateInVariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  return createStore(
    rootReducers,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInVariant())
  );
}
