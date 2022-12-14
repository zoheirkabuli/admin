import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// components
import MainLayout from "./components/layouts/MainLayout";
import PostsPage from "./components/posts/PostsPage";
import AddEditPost from "./components/posts/AddEditPost";
import Dashboard from "./components/dashboard/Dashboard";

const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clb5ao67h048c01ug41agcslq/master",
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: { fetchPolicy: "network-only" },
    query: { fetchPolicy: "network-only" },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>خطا</h1>,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "posts",
        element: <PostsPage />,
      },
      {
        path: "posts/edit/:postId",
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
