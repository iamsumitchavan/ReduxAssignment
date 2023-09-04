import { State } from "../Reducer/Store";
import { createSelector } from "reselect";

const StateData = (state: State) => state.User;

export const QuerySelector = createSelector(
  StateData,
  (QueryData) => QueryData.query
);

export const UserSelector = createSelector(
  StateData,
  (UserData) => UserData.User
);
