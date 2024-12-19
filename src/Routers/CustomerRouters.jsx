import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { HomePage } from "../components/Pages/HomePage";
import { Cart } from "../components/Cart/Cart";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";
import Product from "../components/Product/Product";
import ProductDetails from "../components/PoductDetails/ProductDetails";
import Checkout from "../components/Checkout/Checkout";
import { Order } from "../components/Order/Order";
import { OrderDetails } from "../components/Order/OrderDetails";
import { PaymentSuccess } from "../components/Payment/PaymentSuccess";

export const CustomerRouters = () => {
  // const Layout = () => {
  //   return (
  //     <div className="main">
  //       <Navigation />
  //       <div className="container">
  //         <div className="contentContainer">
  //           <Outlet />
  //         </div>
  //       </div>
  //       <Footer />
  //     </div>
  //   );
  // };
  // return (
  //   <div>
  //     <div>
  //       <Navigation />
  //     </div>
  //     <Routes>
  //       <Route path="/login" element={<div>Hello World</div>}></Route>
  //       <Route path="/register" element={<HomePage />}></Route>
  //       <Route path="/" element={<HomePage />}></Route>
  //       <Route path="/cart" element={<Cart />}></Route>
  //       <Route
  //         path="/:levelOne/:levelTwo/:levelThree"
  //         element={<Product />}
  //       ></Route>
  //       <Route path="/product/:productId" element={<ProductDetails />}></Route>
  //       <Route path="/checkout" element={<Checkout />}></Route>
  //       <Route path="/account/order" element={<Order />}></Route>
  //       <Route
  //         path="/account/order/:orderId"
  //         element={<OrderDetails />}
  //       ></Route>
  //       <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>
  //     </Routes>
  //     <div>
  //       <Footer />
  //     </div>
  //   </div>
  // );
};
