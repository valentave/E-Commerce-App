import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Shop from "./Pages/Shop/Shop"
import Product from "./Pages/Product/Product"
//import ErrorPage from "./ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {path: "shop", element: <Shop />},
        {path: "product/:id", element: <Product />}
      ]
      //errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;