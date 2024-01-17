import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SiteHeader from "./components/header/Header.js";
import Table from "./components/table/Table.js";
import Goalgetter from "./components/goalgetter/Goalgetter.js";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <>
        <SiteHeader />
      </>
    ),
  },
  {
    path: "table",
    element: (
      <>
        <SiteHeader />
        <Table />
      </>
    ),
  },
  {
    path: "goalgetter",
    element: (
      <>
        <SiteHeader />
        <Goalgetter />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
