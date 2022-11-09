import * as React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Bridge from "./src/pages/bridge";
import Main from "./src/pages";

const router = createBrowserRouter([
  {
    path: "/bridge",
    element: <Bridge />,
  },
  {
    path: "/",
    element: <Main />,
  },
]);
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<RouterProvider router={router} />);
}
