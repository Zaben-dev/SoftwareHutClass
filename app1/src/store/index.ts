import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  initialStoreState,
  reducers,
  StoreState,
  StoreActionTypes,
} from "./store";

const store = createStore<StoreState, StoreActionTypes, any, any>(
  reducers,
  initialStoreState,
  composeWithDevTools()
);

export default store;
