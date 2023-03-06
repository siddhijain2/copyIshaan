import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./pages/enuncify/reducers/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      {console.log(store.textToRead)}
      <App />
    </Provider>
);
