import { ActionCreator } from ".";

export const GET_QUERY = "GET_QUERY";
export const GetQueryAction: ActionCreator<string> = (username: string) => ({
  type: GET_QUERY,
  payload: username,
});

export const GET_USERLIST = "GET_USERLIST";
export const GetUserListAction: ActionCreator<{}> = (User: {}) => ({
  type: GET_USERLIST,
  payload: User,
});
