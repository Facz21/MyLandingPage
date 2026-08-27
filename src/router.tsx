import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  // Support both custom domain (basepath = undefined) and GitHub Pages repo subpath (/MyLandingPage)
  let basepath: string | undefined = undefined;
  if (typeof window !== "undefined") {
    const pathname = window.location.pathname;
    if (pathname.toLowerCase().startsWith("/mylandingpage")) {
      basepath = "/MyLandingPage";
    }
  }

  const router = createRouter({
    routeTree,
    basepath,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
