import { AnyAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { GetUserList } from "../Api";
import { GetUserListAction } from "../action/User";

function* FetchData(action: AnyAction): Generator<any, any, any> {
  const data = yield call(GetUserList, action.payload);

  yield put(GetUserListAction(data));
}

export default FetchData;
