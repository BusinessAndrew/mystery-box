import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/iconly/iconly.css";
import App from "./App";
import store from "./contexts/store";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import { getCookie } from "./config/useCookie";
// import "./bootstrap.css";

// import "bootstrap/dist/css/bootstrap.css";
// async importing style

const night = getCookie("dayNight");

night === "true"
  ? document.body.classList.add("dark")
  : document.body.classList.remove("dark");

(async () => {
  night === "true" ? import("./dark.css") : import("./style.css");
})();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <CookiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </Provider>
);
