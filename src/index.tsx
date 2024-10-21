import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import React from "react";
import store from "@src/store";
import { Provider } from "react-redux";

const container = document.getElementById("root");

// 非空断言，确保 container 不是 null
if (container !== null) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>,
  );
} else {
  console.error("Failed to find the root element");
}
