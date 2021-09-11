import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';

import MainDashboard from './MainDashboard';
import ProductList from './ProductList';
import NeatLogo from '@app/components/Logo/NeatLogo';
import Sidebar from '@app/components/Dashboard/Sidebar';

import { REM } from '@app/utils/utils';


const Dashboard = () => {
  const [ appearSmth, setAppearSmth ] = useState(true);
  const location = useLocation();

  const doAppearSmth = () => {
    if (appearSmth) {
      setTimeout(() => setAppearSmth(false), 1500);
    }
  }

  useEffect(() => {
    doAppearSmth();
  }, []);

  return (
    <div className="h-full relative">
      {
        appearSmth ? null : <DashboardRoute />
      }
      <div className={`greeting flex-grow absolute h-full w-full flex items-center justify-center flex-col space-y-2.5 ${appearSmth ? 'appear' : 'disappear'}`}>
        <NeatLogo height="5rem" color="#fff" leafSize={`${4*REM}`} />
        <div id="logo-desc" className="text-white flex items-center justify-center flex-col font-caption font-normal tracking-widest">
          <p className="text-lg text-center">a Point of Sales System for Organizing Your Bussiness</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

const DashboardRoute = () => {
  return (
    <div id="dashboard-route" className="h-full flex flex-row relative">
      <Sidebar />
      <div id="router-view" className="flex-grow">
        <Switch>
          <Route path='/dashboard' exact>
            <MainDashboard />
          </Route>
          <Route path='/dashboard/product-list'>
            <ProductList />
          </Route>
        </Switch>
      </div>
    </div>
  );
}