import React from "react";
import { lazy } from "react";
import LazyImportComponent from "@src/components/lazyImportComponent";

const routes = [
  {
    path: "/",
    element: (
      <LazyImportComponent
        lazyChildren={lazy(() => import("@components/Layout"))}
      />
    ),
    children: [
      {
        path: "/",
        element: (
          <LazyImportComponent
            lazyChildren={lazy(() => import("@src/views/Home"))}
          />
        ),
      },
      {
        path: "/objects",
        element: (
          <LazyImportComponent
            lazyChildren={lazy(() => import("@src/views/Objects"))}
          />
        ),
      },
    ],
  },
];

export default routes;
