import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Router, Switch } from "wouter";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useAnalyticsPageViews } from "./hooks/useAnalyticsPageViews";

const Home = lazy(() => import("./pages/Home"));
const Metodologia = lazy(() => import("./pages/Metodologia"));
const Certificacion = lazy(() => import("./pages/Certificacion"));
const Ec0679 = lazy(() => import("./pages/certificacion/Ec0679"));
const Ec0679Agenda = lazy(() => import("./pages/certificacion/Ec0679Agenda"));
const Ec0974 = lazy(() => import("./pages/certificacion/Ec0974"));
const Ec0974Agenda = lazy(() => import("./pages/certificacion/Ec0974Agenda"));
const Empresas = lazy(() => import("./pages/Empresas"));
const Fundadora = lazy(() => import("./pages/Fundadora"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const BlogPost2 = lazy(() => import("./pages/BlogPost2"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const routerBase = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

function AppRouter() {
  useAnalyticsPageViews();

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/metodologia" component={Metodologia} />
      <Route path="/certificacion/ec0679/agenda" component={Ec0679Agenda} />
      <Route path="/certificacion/ec0679" component={Ec0679} />
      <Route path="/certificacion/ec0974/agenda" component={Ec0974Agenda} />
      <Route path="/certificacion/ec0974" component={Ec0974} />
      <Route path="/certificacion" component={Certificacion} />
      <Route path="/empresas" component={Empresas} />
      <Route path="/fundadora" component={Fundadora} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/estructura-agilidad-ingles-oficina" component={BlogPost} />
      <Route path="/blog/limitaciones-estrategia-comunicar-soluciones-ingles" component={BlogPost2} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
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
