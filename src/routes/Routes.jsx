import React from 'react';
import { Route, Switch } from 'react-router';

import Home from '@app/pages/Home';
import Login from '@app/pages/Login';
import Page404 from '@app/pages/Page404';
import Dashboard from '@app/pages/Dashboard';

export const PublicRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
}

export const PrivateRoutes = () => {
  return (
    <Switch>
      <Route path="/dashboard" exact>
        <Dashboard />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
}