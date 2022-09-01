import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../src/app/App";
import reportWebVitals from "./reportWebVitals";
import { FormDataContextProvider } from "./contexts/formDataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormDataContextProvider>
      <App />
    </FormDataContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
