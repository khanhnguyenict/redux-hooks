import {
  createEpicMiddleware
} from 'redux-observable';
import {
  createStore,
  applyMiddleware
} from "redux";
import rootEpic from "./epics/root";
import rootReducer from './reducers/index';


const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  //create store
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  );

  // run epic
  epicMiddleware.run(rootEpic);

  return store;
}