import React from "react";
import ReactDOM from "react-dom";

// import global app scss
import "@/assets/styles/app.scss";

// import global components
import Router from "@/app/router";

// import global library css
import "@gabemule/react-boilerplate/main.css";

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
