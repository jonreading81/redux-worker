import { combineEpics } from "redux-observable";
import { fetchUserEpic } from "./users";

export const epics = combineEpics(fetchUserEpic);
