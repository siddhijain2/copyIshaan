import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./pages/enuncify/reducers/store";
import { reducer as reducer2, store2 } from './store'
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById("root"));

function Root() {
  return (
    <Provider store={store}>
        <App />
    </Provider>
  );
}
root.render(<Root/>);


serviceWorker.unregister();