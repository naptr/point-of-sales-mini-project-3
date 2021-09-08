import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '@app/pages/Dashboard';
import Login from '@app/pages/Login';
import Page404 from '@app/pages/Page404';

import { PrivateRoute } from '@app/routes/index';
import { LOGGED_IN_FALSE, LOGGED_IN_TRUE } from './utils/temporary-utils';

const Base = ({ loggedIn }) => {
  return <Redirect to={`${ loggedIn ? '/dashboard' : '/login' }`} />;
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route path='/login'>
          <Login loggedIn={LOGGED_IN_FALSE} />
        </Route>
        <Route exact path='/'>
          <Base loggedIn={LOGGED_IN_FALSE} />
        </Route>
        <Route path='*'>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
