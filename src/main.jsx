import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import CartProvider from "./Context/CartProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <Router />
    </CartProvider>
  </React.StrictMode>
);