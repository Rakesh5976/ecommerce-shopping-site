import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Navigation } from "./components/Navigation/Navigation";
import { HomePage } from "./components/Pages/HomePage";
import { LoginForm } from "./components/Auth/LoginForm";
import { Cart } from "./components/Cart/Cart";
import Product from "./components/Product/Product";
import ProductDetails from "./components/PoductDetails/ProductDetails";
import Checkout from "./components/Checkout/Checkout";
import { Order } from "./components/Order/Order";
import { OrderDetails } from "./components/Order/OrderDetails";
import { PaymentSuccess } from "./components/Payment/PaymentSuccess";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navigation />
        <div className="container">
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <HomePage />,
        },
        {
          path: "/register",
          element: <HomePage />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/:levelOne/:levelTwo/:levelThree",
          element: <Product />,
        },
        {
          path: "/product/:productId",
          element: <ProductDetails />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/account/order",
          element: <Order />,
        },
        {
          path: "/account/order/:orderId",
          element: <OrderDetails />,
        },
        {
          path: "/payment/:orderId",
          element: <PaymentSuccess />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
