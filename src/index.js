import React from "react";
import ReactDOM from "react-dom";

// import global assets
import "@/index.scss";

// import global components
import Router from "@/router";

/**
 * App returns the global structure
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
  return (
    <Router />
  );
};

ReactDOM.render(
  <App />,
  document.querySelector("#root")
);
