import { combineReducers } from "redux";
import {
  reducer as counterReducer,
  initialState as counterState,
} from "./counter";
import { reducer as usersReducer, initialState as userState } from "./users";

export const reducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

export const initialState = {
  counter: counterState,
  users: userState,
};
