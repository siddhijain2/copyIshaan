import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import texts from './texts-reducer';
import recognition from "./recogniton-reducer";
import settings from './settings-reducer.js';
import log from 'loglevel';

import { setupListeners } from "@reduxjs/toolkit/query";
const reducers = combineReducers({
  texts,
  recognition,
  settings
});
console.log("Store Enabled....")
let middlewares = applyMiddleware(thunkMiddleware);

log.enableAll();
middlewares = applyMiddleware(thunkMiddleware, createLogger());

export const store = configureStore({ reducer: reducers, middlewares });

setupListeners(store.dispatch);



