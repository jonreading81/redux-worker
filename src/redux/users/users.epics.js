import { mergeMap, map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import { FETCH_USER, setUser } from "./users.actions";

export const fetchUserEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_USER),
    mergeMap((action) =>
      ajax
        .getJSON(
          `https://jsonplaceholder.typicode.com/users/${action.payload.id}`
        )
        .pipe(map(setUser))
    )
  );
