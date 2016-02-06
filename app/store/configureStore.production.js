import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

const finalCreateStore = createStore;

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}
