import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { LOGGED_IN_TRUE, LOGGED_IN_FALSE } from '@app/utils/temporary-utils';


export const PrivateRoute = (props) => {
  const loggedIn = LOGGED_IN_FALSE;

  return loggedIn ? ( <Route {...props} /> ) : ( <Redirect to='/login' /> );
}