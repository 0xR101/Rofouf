import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";



// pages

import Chat from './pages/Chat.jsx';
import BookDescription from "./pages/BookDescription.jsx";
import Home from "./pages/Home.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
