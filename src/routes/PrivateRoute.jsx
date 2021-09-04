import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export const PrivateRoute = (props) => {
  const loggedIn = false;

  return loggedIn ? ( <Route {...props} /> ) : ( <Redirect to="/login" /> );
}