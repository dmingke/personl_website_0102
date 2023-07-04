import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FrontPage } from "./screens/FrontPage";
import { Resume } from "./screens/Resume";
import { Design } from "./screens/Design";
import { Communieat } from "./screens/Communieat";
import { IOResearch } from "./screens/IOResearch";
import { Research } from "./screens/Research";
import { ProgrammingOriginal } from "./screens/ProgrammingOriginal";
import { ResumeScreen } from "./screens/ResumeScreen";
import { ExpediaStudents } from "./screens/ExpediaStudents";
import { WebDevelopment } from "./screens/WebDevelopment";
import { Freeze } from "./screens/Freeze";
import { ElementOverview } from "./screens/ElementOverview";

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
    path: "/design",
    element: <Design />,
  },
  {
    path: "/communieat",
    element: <Communieat />,
  },
  {
    path: "/i-o-research",
    element: <IOResearch />,
  },
  {
    path: "/research",
    element: <Research />,
  },
  {
    path: "/programming-original",
    element: <ProgrammingOriginal />,
  },
  {
    path: "/resumezhong",
    element: <ResumeScreen />,
  },
  {
    path: "/expedia-students-travel",
    element: <ExpediaStudents />,
  },
  {
    path: "/web-development",
    element: <WebDevelopment />,
  },
  {
    path: "/freeze",
    element: <Freeze />,
  },
  {
    path: "/1cademy-overview",
    element: <ElementOverview />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
