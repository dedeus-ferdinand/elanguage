import { Route, Router, Switch } from "wouter";
import { lazy, Suspense } from "react";
import CertErrorBoundary from "./components/CertErrorBoundary";
import { useAnalyticsPageViews } from "./hooks/useAnalyticsPageViews";

const Ec0679 = lazy(() => import("./pages/certificacion/Ec0679"));
const Ec0679Agenda = lazy(() => import("./pages/certificacion/Ec0679Agenda"));
const Ec0974 = lazy(() => import("./pages/certificacion/Ec0974"));
const Ec0974Agenda = lazy(() => import("./pages/certificacion/Ec0974Agenda"));

const routerBase = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

function CertRouter() {
  useAnalyticsPageViews();

  return (
    <Switch>
      <Route path="/certificacion/ec0679/agenda" component={Ec0679Agenda} />
      <Route path="/certificacion/ec0679" component={Ec0679} />
      <Route path="/certificacion/ec0974/agenda" component={Ec0974Agenda} />
      <Route path="/certificacion/ec0974" component={Ec0974} />
      <Route>
        {() => {
          window.location.replace("/certificacion/ec0974");
          return null;
        }}
      </Route>
    </Switch>
  );
}

export default function CertApp() {
  return (
    <CertErrorBoundary>
      <Router base={routerBase}>
        <Suspense fallback={null}>
          <CertRouter />
        </Suspense>
      </Router>
    </CertErrorBoundary>
  );
}
