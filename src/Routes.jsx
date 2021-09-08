import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect, useHistory } from 'react-router-dom';

import Dashboard from '@app/pages/Dashboard';
import Login from '@app/pages/Login';
import Page404 from '@app/pages/Page404';

import { PrivateRoute } from '@app/routes/index';
import { isLogin } from '@app/utils/utils';


const Base = ({ loggedIn }) => {
  return <Redirect to={`${isLogin(loggedIn) ? '/dashboard' : '/login'}`} />
}

const Routes = ({ loggedIn }) => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path='/dashboard' loggedIn={loggedIn}>
          <Dashboard />
        </PrivateRoute>
        <Route path='/login'>
          <Login loggedIn={loggedIn} />
        </Route>
        <Route exact path='/'>
          <Base loggedIn={loggedIn} />
        </Route>
        <Route path='*'>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
