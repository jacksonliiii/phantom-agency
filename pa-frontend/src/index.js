import "core-js/stable/index.js";
import "regenerator-runtime/runtime.js";

import "./css/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

import { NotificationContextProvider } from "./components/contexts/NotificationContext";
import { UserContextProvider } from "./components/contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NotificationContextProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </NotificationContextProvider>
);
