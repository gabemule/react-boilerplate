import React from "react";
import ReactDOM from "react-dom";
import Router from './router'

// import assets
import './index.scss';

const App = () => {
  return (
      <Router />
  );
};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);
