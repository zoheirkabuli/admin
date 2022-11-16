import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import MainLayout from "./components/layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>خطا</h1>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
