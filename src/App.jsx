import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FrontPage } from "./screens/FrontPage";
import { Resume } from "./screens/Resume";
import { Projects } from "./screens/Projects";
import { ResumeScreen } from "./screens/ResumeScreen";
import { SkillsCourse } from "./screens/SkillsCourse";
import { Design } from "./screens/Design";
import { Research } from "./screens/Research";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <FrontPage />,
  },
  {
    path: "/front-page",
    element: <FrontPage />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/resumezhong",
    element: <ResumeScreen />,
  },
  {
    path: "/skills-course",
    element: <SkillsCourse />,
  },
  {
    path: "/design",
    element: <Design />,
  },
  {
    path: "/research",
    element: <Research />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
