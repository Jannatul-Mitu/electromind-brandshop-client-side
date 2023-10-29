import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/pages/Root";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/Register";
import AddProduct from "./components/pages/AddProduct";
import AuthProvider from "./providers/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";
import Company from "./components/Company";
import ProductDtls from "./components/pages/ProductDtls";
import MyCart from "./components/pages/MyCart";
import Update from "./components/Update";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import ErrorPage from "./components/pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/", element: <Root />, errorElement: <ErrorPage/>, 

    children: [
      { path: "/", element: <Home />, loader: () => fetch('https://assaingment-server.vercel.app/brands')},

      { path: "/login", element: <Login /> },

      { path: "/register", element: <Register /> },
      
      { path: "/about", element: <About /> },

      { path: "/contact", element: <Contact /> },

      { path: "/add-product", element: <PrivateRoute><AddProduct /></PrivateRoute> },

      { path: "/company/:id", element: <Company />, loader: ({ params }) => fetch(`https://assaingment-server.vercel.app/company/${params.id}`) },

      { path: "/item/:id", element: <PrivateRoute><ProductDtls /></PrivateRoute>, loader: ({ params }) => fetch(`https://assaingment-server.vercel.app/item/${params.id}`) },

      { path: "/cart", element: <MyCart />, loader: () => fetch('https://assaingment-server.vercel.app/cart') },

      { path: "/update/:id", element: <PrivateRoute><Update /></PrivateRoute>, loader: ({ params }) => fetch(`https://assaingment-server.vercel.app/update/${params.id}`) },


    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><AuthProvider><RouterProvider router={router} /></AuthProvider></React.StrictMode>
);