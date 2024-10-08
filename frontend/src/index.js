import React from "react";
import ReactDOM from "react-dom";
import "./theme.scss";
import "./index.css"; // Import global styles from styles folder
import { App } from "components"; // Import App component
import { reportWebVitals } from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
