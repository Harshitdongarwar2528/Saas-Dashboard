import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider";
import App from "./App";
import { registerLicense } from "@syncfusion/ej2-base";
registerLicense(process.env.REACT_APP_SYNCFUSION_LICENSE);

ReactDOM.render(
  <ContextProvider>
    <App />,
  </ContextProvider>,

  document.getElementById("root"),
);
