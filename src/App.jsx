import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FrontPage } from "./screens/FrontPage";
import { Resume } from "./screens/Resume";
import { Freeze } from "./screens/Freeze";
import { Research } from "./screens/Research";
import { Design } from "./screens/Design";
import { Communieat } from "./screens/Communieat";
import { ResumeScreen } from "./screens/ResumeScreen";
import { ProgrammingOriginal } from "./screens/ProgrammingOriginal";
import { Projects } from "./screens/Projects";
import { SkillsCourse } from "./screens/SkillsCourse";

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
    path: "/freeze",
    element: <Freeze />,
  },
  {
    path: "/research",
    element: <Research />,
  },
  {
    path: "/design",
    element: <Design />,
  },
  {
    path: "/communieat",
    element: <Communieat />,
  },
  {
    path: "/resumezhong",
    element: <ResumeScreen />,
  },
  {
    path: "/programming-original",
    element: <ProgrammingOriginal />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/skills-course",
    element: <SkillsCourse />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
