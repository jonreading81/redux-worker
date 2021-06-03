import { combineReducers } from "redux";

import { reducer as usersReducer, initialState as userState } from "./users";

export const reducer = combineReducers({
  users: usersReducer,
});

export const initialState = {
  users: userState,
};
