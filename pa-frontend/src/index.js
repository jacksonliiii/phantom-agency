import "core-js/stable/index.js";
import "regenerator-runtime/runtime.js";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

import "./css/index.css"
import "./css/navbar.css"
import "./css/footer.css"
import "./css/tickets.css"
import "./css/login.css"
import "./css/about.css"
import "./css/careers.css"
import "./css/register.css"

import { QueryClient, QueryClientProvider } from "react-query";
import { NotificationContextProvider } from "./components/contexts/NotificationContext";
import { UserContextProvider } from "./components/contexts/UserContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <NotificationContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </NotificationContextProvider>
  </QueryClientProvider>
);
