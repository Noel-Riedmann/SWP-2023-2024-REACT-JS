import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SiteHeader from "./components/header/Header.js";
import Goalgetter from "./components/goalgetter/Goalgetter.js";
import FootballTable from "./components/table/FootballTable";

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
        <FootballTable />
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

