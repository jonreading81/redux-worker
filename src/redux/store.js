import { wrapStore } from "redux-in-worker";
import { initialState } from "./reducer";

let store;

if (typeof window !== "undefined") {
  const worker = new Worker(new URL("./store.worker", import.meta.url));
  store = wrapStore(worker, initialState);
} else {
  const { configureStore } = require("./configureStore");
  store = configureStore();
}

export { store };
