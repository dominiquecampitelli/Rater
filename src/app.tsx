import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { Login } from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyle />
    </>
  );
}
