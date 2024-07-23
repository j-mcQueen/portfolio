import { reciperack } from "./components/project/data/reciperack";
import { mrbaguette } from "./components/project/data/mrbaguette";
import { findafilm } from "./components/project/data/findafilm";
import { glwr } from "./components/project/data/glwr";
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./components/home/Landing";
import Article from "./components/project/Article";

export default function App() {
  const [activeProject, setActiveProject] = useState("");

  const supplyData = (data: string) => {
    switch (data) {
      case "reciperack":
        return reciperack;

      case "mrbaguette":
        return mrbaguette;

      case "findafilm":
        return findafilm;

      case "goodluckwhiterabbit":
        return glwr;

      default:
        break;
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing setActiveProject={setActiveProject} />,
      errorElement: "",
    },
    {
      path: "/projects/:id",
      element: <Article data={supplyData(activeProject)} />,
      errorElement: "",
    },
  ]);

  return <RouterProvider router={router} />;
}
