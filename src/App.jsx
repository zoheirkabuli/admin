import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// components
import MainLayout from "./components/layouts/MainLayout";
import PostsPage from "./components/posts/PostsPage";
import AddEditPost from "./components/posts/AddEditPost";

const client = new ApolloClient({
  uri: "https://api-us-east-1.hygraph.com/v2/claar4ifq0jae01uj4d4z0g6n/master",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>خطا</h1>,
    children: [
      {
        index: true,
        element: <h1>داشبورد</h1>,
      },
      {
        path: "posts",
        element: <PostsPage />,
      },
      {
        path: "posts/edit/:postUrl",
        element: <AddEditPost />,
      },
      {
        path: "posts/add",
        element: <AddEditPost />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
};

export default App;
