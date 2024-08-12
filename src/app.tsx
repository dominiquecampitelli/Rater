import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>teste</h1>,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
