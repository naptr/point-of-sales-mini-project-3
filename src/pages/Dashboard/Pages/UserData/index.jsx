import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import Main from './Main';
import Staff from './Staff';
import Suppliers from './Suppliers';
import Users from './Users';


const UserData = () => {
  return (
    <>
      <Switch>
        <Route exact path='/dashboard/user-data'>
          <Main />
        </Route>
        <Route path='/dashboard/user-data/users'>
          <Users />
        </Route>
        <Route path='/dashboard/user-data/staff'>
          <Staff />
        </Route>
        <Route path='/dashboard/user-data/suppliers'>
          <Suppliers />
        </Route>
      </Switch>
    </>
  );
}

export default UserData;