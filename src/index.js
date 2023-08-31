import React from "react";
import ReactDOM from "react-dom/client";
import AppClass from "./AppClass";
import reportWebVitals from "./reportWebVitals";
import "./styles/global.scss";
import AppFunction from "./AppFunction";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <AppClass />
  <AppFunction />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
