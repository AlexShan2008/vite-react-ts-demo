import { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("@screen/home/home"));
const About = lazy(() => import("@screen/about/about"));
const Users = lazy(() => import("@screen/users/users"));

import DefaultLayout from "@shared/components/default-layout/default-layout.component";
import Spinner from "@shared/components/spinner/spinner.component";

export const Router = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </DefaultLayout>
    </BrowserRouter>
  );
};
