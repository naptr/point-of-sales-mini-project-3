import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AllHistories from './AllHistories';
import Main from './Main';
import HistoriesByDate from './HistoriesByDate';


const Reports = () => {

  return (
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
  );
}

export default Reports;