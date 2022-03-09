import React from "react";
import reactDom from "react-dom";
import "./index.css";
import App from "./App";
import { CartContextProvider } from "./helpers/contexts/CartContext";
import { CountryContextProvider } from "./helpers/contexts/CountryContext";

reactDom.render(
  <React.StrictMode>
    <CountryContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </CountryContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
