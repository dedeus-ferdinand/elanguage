import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Router, Switch } from "wouter";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

const Home = lazy(() => import("./pages/Home"));
const Metodologia = lazy(() => import("./pages/Metodologia"));
const Certificacion = lazy(() => import("./pages/Certificacion"));
const Empresas = lazy(() => import("./pages/Empresas"));
const Fundadora = lazy(() => import("./pages/Fundadora"));
const NotFound = lazy(() => import("./pages/NotFound"));

const routerBase = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/metodologia" component={Metodologia} />
      <Route path="/certificacion" component={Certificacion} />
      <Route path="/empresas" component={Empresas} />
      <Route path="/fundadora" component={Fundadora} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router base={routerBase}>
            <Suspense fallback={null}>
              <AppRouter />
            </Suspense>
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
