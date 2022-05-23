import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import chackraTheme from "../src/theme/index";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={chackraTheme}>
    {/* <ChakraProvider theme={chackraTheme}> */}
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
