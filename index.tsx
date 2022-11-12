import * as React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import BridgeMain from "./src/pages/bridge";
import BuilderMain from "./src/pages/builder";
import Main from "./src/pages";

const router = createBrowserRouter([
  {
    path: "/bridge",
    element: <BridgeMain />,
  },
  {
    path: "/builder",
    element: <BuilderMain />,
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
