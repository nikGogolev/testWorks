import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { library } from "@fortawesome/fontawesome-svg-core";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
  faGear,
  faAnglesLeft,
  faBars,
  faXmark,
  faPlus,
  faPlusCircle,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faGear,
  faAnglesLeft,
  faBars,
  faXmark,
  faPlus,
  faLocationArrow,
  faPlusCircle
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
