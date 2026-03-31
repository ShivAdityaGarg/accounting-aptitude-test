import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FAQ from "./pages/FAQ";
import GiveTest from "./pages/GiveTest";
import Guidelines from "./pages/Guidelines";
import Home from "./pages/Home";

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faq",
  component: FAQ,
});
const guidelinesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/guidelines",
  component: Guidelines,
});
const testRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/test",
  component: GiveTest,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  faqRoute,
  guidelinesRoute,
  testRoute,
]);
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  );
}
