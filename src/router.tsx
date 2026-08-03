import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes — évite les refetch inutiles
        gcTime: 1000 * 60 * 10,
      },
    },
  });

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: false,   // one-page app : pas de gestion de scroll multi-route
    defaultPreload: "intent",   // précharge les routes au hover sur les liens
    defaultPreloadStaleTime: 1000 * 30, // 30s de fraîcheur — évite les refetch à chaque clic
  });

  return router;
};
