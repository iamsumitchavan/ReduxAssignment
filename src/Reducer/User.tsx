import { AnyAction } from "@reduxjs/toolkit";
import { GET_QUERY, GET_USERLIST } from "../action/User";
import { produce } from "immer";

export type state = {
  User: { login: string; avatar_url: string };
  query: string;
};

export const initialState: state = {
  User: { login: "", avatar_url: "" },
  query: "",
};

const UserReducers = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_QUERY:
      return produce(state, (draft) => {
        draft.query = action.payload;
      });

    case GET_USERLIST:
      return produce(state, (draft) => {
        draft.User = action.payload;
      });

    default:
      return state;
  }
};

export default UserReducers;
