import { Home } from "../pages/Home";
import type { ReactNode } from "react";

export const routes: { path: string; element: ReactNode }[] = [
  {
    path: "/",
    element: <Home />,
  },
];
  // Add more routes here in the future
  // Example:
  // {
  //   path: '/about',
  //   element: <About />,
  // },
];
