import React from "react";
import ReactDOM from "react-dom";
// import App from './App';
// import LogEffect from "./LogEffect";
// import FocusedInput from "./FocusedInput";
import RedditWrapper from "./RedditWrapper";

ReactDOM.render(
  <React.StrictMode>
    {/* Pass "reactjs" as a prop: */}
    <RedditWrapper />
  </React.StrictMode>,
  document.getElementById("root")
);
