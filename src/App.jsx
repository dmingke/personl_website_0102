import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FrontPage } from "./screens/FrontPage";
import { IOResearch } from "./screens/IOResearch";
import { ExpediaStudents } from "./screens/ExpediaStudents";
import { ElementOverview } from "./screens/ElementOverview";
import { Resume } from "./screens/Resume";
import { Design } from "./screens/Design";
import { ProgrammingOriginal } from "./screens/ProgrammingOriginal";
import { Freeze } from "./screens/Freeze";
import { Research } from "./screens/Research";
import { Communieat } from "./screens/Communieat";
import { ResumeScreen } from "./screens/ResumeScreen";
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
    path: "/i-o-research",
    element: <IOResearch />,
  },
  {
    path: "/expedia-students-travel",
    element: <ExpediaStudents />,
  },
  {
    path: "/1cademy-overview",
    element: <ElementOverview />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/design",
    element: <Design />,
  },
  {
    path: "/programming-original",
    element: <ProgrammingOriginal />,
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
    path: "/communieat",
    element: <Communieat />,
  },
  {
    path: "/resumezhong",
    element: <ResumeScreen />,
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
