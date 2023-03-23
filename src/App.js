import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Inventory from "./components/inventory/Inventory";
import Orders from "./components/orders/Orders";
import Products from "./components/Products/Products";

import Main from "./layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Products />,
        },
        {
          path: "/orders",
          loader: () => {
            return fetch("products.json");
          },
          element: <Orders />,
        },
        {
          path: "/inventory",
          element: <Inventory />,
        },
        {
          path: "/about",
          element: <About></About>,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
