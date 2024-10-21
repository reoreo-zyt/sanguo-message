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
        path: "/about",
        element: (
          <LazyImportComponent
            lazyChildren={lazy(() => import("@src/views/About"))}
          />
        ),
      },
      {
        path: "/news",
        element: (
          <LazyImportComponent
            lazyChildren={lazy(() => import("@src/views/News"))}
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
      {
        path: "/contact",
        element: (
          <LazyImportComponent
            lazyChildren={lazy(() => import("@src/views/Contact"))}
          />
        ),
      },
    ],
  },
];

export default routes;
