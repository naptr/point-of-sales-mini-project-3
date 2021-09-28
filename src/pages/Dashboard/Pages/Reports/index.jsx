import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import AllHistories from './AllHistories';
import Main from './Main';
import HistoriesByDate from './HistoriesByDate';

import ReportsNav from '@app/components/Dashboard/Reports/ReportsNav';


const Reports = () => {
  const location = useLocation();

  return (
    <div className="flex-grow flex flex-col max-h-full">
      {
        (location.pathname.includes('/all-histories') || location.pathname.includes('/histories-by-date')) && <ReportsNav />
      }
      <Switch>
        <Route path='/dashboard/reports' exact>
          <Main />
        </Route>
        <Route path='/dashboard/reports/all-histories'>
          <AllHistories />
        </Route>
        <Route path='/dashboard/reports/histories-by-date'>
          <HistoriesByDate />
        </Route>
      </Switch>
    </div>
  );
}

export default Reports;