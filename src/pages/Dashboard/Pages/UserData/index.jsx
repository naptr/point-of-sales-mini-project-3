import React from 'react';
import { Switch, Route, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import UserDataNav from '@app/components/Dashboard/UserData/UserDataNav';

import Main from './Main';
import Staff from './Staff';
import Suppliers from './Suppliers';
import Users from './Users';


const UserData = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex-grow flex flex-col max-h-full">
      {
        (pathname.includes('/users') || pathname.includes('/staff') || pathname.includes('/suppliers')) && <UserDataNav />
      }
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
    </div>
  );
}

export default UserData;