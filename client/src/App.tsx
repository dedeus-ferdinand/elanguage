import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Metodologia from "./pages/Metodologia";
import Certificacion from "./pages/Certificacion";
import Empresas from "./pages/Empresas";
import Fundadora from "./pages/Fundadora";

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
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router base={routerBase}>
            <AppRouter />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
