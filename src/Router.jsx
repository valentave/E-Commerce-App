import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Shop from "./Pages/Shop/Shop"
import Product from "./Pages/Product/Product"
import Cart from "./Pages/Cart/Cart";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import AboutUs from "./Pages/AboutUs/AboutUs";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {path: "shop", element: <Shop />, children: [
          {path: ":category", element: <Shop/>}
        ]},
        {path: "product/:id", element: <Product />},
        {path: "cart", element: <Cart/>},
        {path: "*", element: <ErrorPage/>},
        {path: "about-us", element: <AboutUs/>}
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;