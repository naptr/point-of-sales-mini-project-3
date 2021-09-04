import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '@app/pages/Dashboard';
import Login from '@app/pages/Login';
import Page404 from '@app/pages/Page404';

import { PrivateRoute } from './routes/index';


const Base = ({ loggedIn }) => {
  return <Redirect to={`${ loggedIn ? '/dashboard' : '/login' }`} />;
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/login">
          <Login loggedIn={false} />
        </Route>
        <Route exact path="/">
          <Base loggedIn={false} />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
