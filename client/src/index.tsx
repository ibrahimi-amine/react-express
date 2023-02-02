import store from "./components/application/store";
import { StoreProvider } from "easy-peasy";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StoreProvider store={store}>
    <BrowserRouter basename="">
      <App />
    </BrowserRouter>
  </StoreProvider>
);

declare global {
  interface Window {
    mystore: unknown;
  }
}
window.mystore = store;
