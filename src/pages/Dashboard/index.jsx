import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';

import MainDashboard from './MainDashboard';
import ProductData from './Pages/ProductData';
import UserData from './Pages/UserData';

// import NeatLogo from '@app/components/Logo/NeatLogo';
import Sidebar from '@app/components/Dashboard/Sidebar';
import Splashscreen from '@app/components/Dashboard/Splashscreen';
import Topbar from '@app/components/Dashboard/Topbar';

// import { REM } from '@app/utils/utils';


const Dashboard = () => {
  const [ appearSmth, setAppearSmth ] = useState(true);

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
      <Splashscreen appear={appearSmth} />
    </div>
  );
}

export default Dashboard;

const DashboardRoute = () => {
  return (
    <div id="dashboard-route" className="h-full flex flex-row relative">
      <Sidebar />
      <div id="router-view" className="flex-grow pl-20 pr-6 py-6">
        <Topbar />
        <Switch>
          <Route path='/dashboard' exact>
            <MainDashboard />
          </Route>
          <Route path='/dashboard/user-data'>
            <UserData />
          </Route>
          <Route path='/dashboard/product-data'>
            <ProductData />
          </Route>
          <Route path='/dashboard/search'>

          </Route>
          <Route path='/dashboard/transactions'>

          </Route>
          <Route path='/dashboard/reports'>

          </Route>
        </Switch>
      </div>
    </div>
  );
}