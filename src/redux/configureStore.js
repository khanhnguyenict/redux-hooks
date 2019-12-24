import countReducer from "./reducer";
import {
  createEpicMiddleware
} from 'redux-observable';
import {
  createStore,
  applyMiddleware
} from "redux";
import rootEpic from "./root";


const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  //create store
  const store = createStore(
    countReducer,
    applyMiddleware(epicMiddleware)
  );

  // run epic
  epicMiddleware.run(rootEpic);

  return store;
}