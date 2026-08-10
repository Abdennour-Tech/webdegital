import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const appCss = "/assets/styles-B19fJzXA.css";
function reportLovableError(error, context = {}) {
  var _a, _b, _c;
  if (typeof window === "undefined") return;
  (_b = (_a = window.__lovableEvents) == null ? void 0 : _a.captureException) == null ? void 0 : _b.call(
    _a,
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
  const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
  (_c = window.__lovableReportRuntimeError) == null ? void 0 : _c.call(window, {
    message,
    stack: error instanceof Error ? error.stack : void 0,
    filename: window.location.pathname
  });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "webdegital — Agence digitale" },
      {
        name: "description",
        content: "Agence digitale spécialisée dans la création de sites web et de solutions digitales modernes."
      },
      { name: "author", content: "webdegital" },
      { property: "og:site_name", content: "webdegital" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@300;400;500;600;700&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@300;400;500;600;700&display=swap"
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "fr", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const CONTACT = {
  phoneDisplay: "+212 638-711276",
  phoneHref: "tel:+212638711276",
  email: "Solidweb.contact@gmail.com",
  emailHref: "mailto:Solidweb.contact@gmail.com",
  address: "5 Avenue Mimosa, Ain Sebaa, Casablanca",
  addressHref: "https://maps.google.com/?q=5+Avenue+Mimosa+Ain+Sebaa+Casablanca+Maroc",
  whatsappNumber: "212638711276",
  whatsappHref: "https://wa.me/212638711276?text=Bonjour%20webdegital%2C%20je%20souhaite%20discuter%20d%27un%20projet%20digital."
};
const NAV_LINKS = [
  { key: "home", href: "#accueil" },
  { key: "services", href: "#services" },
  { key: "about", href: "#a-propos" },
  { key: "portfolio", href: "#realisations" },
  { key: "process", href: "#processus" },
  { key: "contact", href: "#contact" }
];
const $$splitComponentImporter = () => import("./index-DgyWKN97.js");
const title = "webdegital — Agence digitale : création de sites web modernes";
const description = "webdegital crée des sites vitrines, portfolios, landing pages et solutions digitales sur mesure pour entreprises, entrepreneurs et professionnels.";
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title
    }, {
      name: "description",
      content: description
    }, {
      property: "og:title",
      content: title
    }, {
      property: "og:description",
      content: description
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "https://webdegital.ma/"
    }, {
      property: "og:image",
      content: "https://webdegital.ma/og-image.jpg"
    }, {
      property: "og:image:width",
      content: "1200"
    }, {
      property: "og:image:height",
      content: "630"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:image",
      content: "https://webdegital.ma/og-image.jpg"
    }],
    links: [{
      rel: "canonical",
      href: "https://webdegital.ma/"
    }, {
      rel: "sitemap",
      type: "application/xml",
      href: "/sitemap.xml"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "webdegital",
        description,
        telephone: CONTACT.phoneDisplay,
        email: CONTACT.email,
        areaServed: "MA",
        serviceType: ["Création de sites web", "Sites vitrines", "Sites portfolio", "Landing pages", "Solutions digitales"]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1e3 * 60 * 5,
        // 5 minutes — évite les refetch inutiles
        gcTime: 1e3 * 60 * 10
      }
    }
  });
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: false,
    // one-page app : pas de gestion de scroll multi-route
    defaultPreload: "intent",
    // précharge les routes au hover sur les liens
    defaultPreloadStaleTime: 1e3 * 30
    // 30s de fraîcheur — évite les refetch à chaque clic
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  CONTACT as C,
  NAV_LINKS as N,
  router as r
};
