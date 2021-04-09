import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { GlobalStyle } from "./style";

const AppRender = () => (
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

ReactDOM.render(<AppRender />, document.getElementById("app"));
