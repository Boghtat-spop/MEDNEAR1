import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; 
import { BrowserRouter as Router } from "react-router-dom";

// تطبيق React مع Router في الأعلى
ReactDOM.render(
  <React.StrictMode>
    <Router> 
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
