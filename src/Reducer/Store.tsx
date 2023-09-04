import {
  combineReducers,
  createStore,
  applyMiddleware,
} from "@reduxjs/toolkit";
import UserReducers from "./User";
import createSagaMiddleware from "redux-saga";
import { debounce } from "redux-saga/effects";
import FetchData from "../sagas/FetchData";
import { GET_QUERY } from "../action/User";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();
const Reducer = combineReducers({
  User: UserReducers,
});

function* rootSaga() {
  yield debounce(200, GET_QUERY, FetchData);
}

export type State = ReturnType<typeof Reducer>;

const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export default store;

sagaMiddleware.run(rootSaga);
