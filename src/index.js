import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; 
import { BrowserRouter as Router } from "react-router-dom";



const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);


ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById("root") 
);
