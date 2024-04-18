import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./index.css";
import Seller from "./pages/Seller.jsx";

// pages

import Chat from "./pages/Chat.jsx";
import BookDescription from "./pages/BookDescription.jsx";
import Home from "./pages/Home.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "bookDescription",
    element: <BookDescription />,
  },
  {
    path: "chat",
    element: <Chat />,
  },
  {
    path: "seller",
    element: <Seller />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
