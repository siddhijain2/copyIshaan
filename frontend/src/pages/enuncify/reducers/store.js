import { combineReducers, applyMiddleware } from "redux";
import { configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import texts from './texts-reducer';
import recognition from "./recogniton-reducer";
import settings from './settings-reducer.js';
import log from 'loglevel';
import { userAuthApi } from "../../../services/userAuthApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const reducers = combineReducers({
  texts: texts,
  recognition: recognition,
  settings: settings,
  [userAuthApi.reducerPath]: userAuthApi.reducer
});

let middlewares = applyMiddleware(thunkMiddleware);

log.enableAll();
middlewares = applyMiddleware(thunkMiddleware, createLogger());

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApi.middleware),
});

setupListeners(store.dispatch);








