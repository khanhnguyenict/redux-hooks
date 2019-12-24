
import reducer  from "./reducer";

import { createStore } from "redux";

export default function configureStore() {
    const store = createStore(reducer);
    // epicMiddleware.run(rootEpic);
    return store;
  }