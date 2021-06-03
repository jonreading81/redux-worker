export const FETCH_USER = "FETCH_USER";

export const SET_USER = "SET_USER";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const fetchUser = (id) => ({
  type: FETCH_USER,
  payload: {
    id,
  },
});
