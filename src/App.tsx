import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./components/home/Landing";
import Project from "./components/project/Project";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Landing />, errorElement: "" },
    { path: "/project/:id", element: <Project />, errorElement: "" },
  ]);

  return <RouterProvider router={router} />;
}
