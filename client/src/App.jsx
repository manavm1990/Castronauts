import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./routes/home";
import Track from "./routes/track";

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
        path: "/:trackId",
        element: <Track />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
