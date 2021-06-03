import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer, initialState } from "./reducer";
import { epics } from "./epics";

const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

const epicMiddleware = createEpicMiddleware();
const middlewares = [logger, epicMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

export const configureStore = () => {
  const store = createStore(reducer, initialState, composedEnhancers);
  epicMiddleware.run(epics);

  return store;
};
