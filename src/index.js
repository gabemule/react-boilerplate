import React from "react";
import ReactDOM from "react-dom";

import MyImage from './assets/dog.jpg';
import './index.scss';

const App = () => {
  return (
    <div>
      <h1>MF React Template</h1>
      <img src={MyImage} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
