import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/index.jsx";
import Orders from "./pages/Orders/index.jsx";
import GlobalStyle from "./GlobalStyle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);
