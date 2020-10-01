import React from "react";
import { Switch, Route } from "react-router";
import Home from "../Home";

const AppRouter = () => (
  <Switch>
    <Route component={Home} />
  </Switch>
);

export default AppRouter;
