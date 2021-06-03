import { createStore } from "redux";
import { reducer, initialState } from "./reducer";
import { composedEnhancers, epicMiddleware } from "./middleware";
import { epics } from "./epics";

export const configureStore = () => {
  const store = createStore(reducer, initialState, composedEnhancers);
  epicMiddleware.run(epics);

  return store;
};
