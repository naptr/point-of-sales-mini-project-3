import React, { useEffect } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';

import { isLogin } from '@app/utils/auth-utils';


export const PrivateRoute = ({ path, loggedIn, children }) => {

  return isLogin(loggedIn) ? ( <Route path={path}>{children}</Route> ) : ( <Redirect to='/login' /> );
}