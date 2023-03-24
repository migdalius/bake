import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "../src/components/footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Gigs from "../src/pages/gigs/Gigs";
import Gig from "../src/pages/gig/Gig";
import Orders from "../src/pages/orders/Orders";
import MyGigs from "../src/pages/MyGigs/MyGigs";
import Add from "../src/pages/add/Add";
import Messages from "../src/pages/message/Message";
import Message from "../src/pages/message/Message";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
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
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/mygigs",
          element: <MyGigs />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/mesage/:id",
          element: <Message />,
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
