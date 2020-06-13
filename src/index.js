import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <script src="hover.js" type="text/javascript"></script>
    <App />
  </React.StrictMode>,
  rootElement
);
