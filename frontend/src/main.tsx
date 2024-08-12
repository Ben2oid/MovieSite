import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MainPage } from "./pages/MainPage/MainPage.tsx";

const queryClient = new QueryClient();
queryClient.setQueryData(["sessionToken"], () => true);

const router = createBrowserRouter([
  queryClient.getQueryData(["sessionToken"])
    ? {
        element: <App />,
        children: [
          {
            path: "/",
            element: <MainPage />,
          },
          {
            path: "/myList",
            element: <div>HERE'S YOUR LIST</div>,
          },
        ],
      }
    : {
        element: <App />,
        children: [
          {
            path: "/",
            element: <MainPage />,
          },
          {
            path: "myList",
            element: <div>YOU ARE NOT LOGGED IN!</div>,
          },
        ],
      },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
