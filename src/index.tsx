import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@material-ui/core";
import DHITheme from "./styles/theme";
import "typeface-roboto";

ReactDOM.render(
  <>
    <ThemeProvider theme={DHITheme}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
