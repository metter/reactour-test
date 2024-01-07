import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { TourProvider } from "@reactour/tour";
import steps from "./steps";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TourProvider steps={steps}>
      <App />
    </TourProvider>
  </React.StrictMode>
);
reportWebVitals();
