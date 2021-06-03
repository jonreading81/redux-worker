import { SET_USER } from "./users.actions";

export const initialState = { user: null };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
