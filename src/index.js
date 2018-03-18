import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import Planner from "./Components/index";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Planner />, document.getElementById("root"));
registerServiceWorker();
