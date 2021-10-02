import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import AllHistories from './AllHistories';
import Main from './Main';
import HistoriesWithFilter from './HistoriesWithFilter';

import TransactionHistoriesNav from '@app/components/Dashboard/Transactions/TransactionHistoriesNav';


const Transactions = () => {
  const location = useLocation();

  return (
    <div className="flex-grow flex flex-col max-h-full">
      {
        (location.pathname.includes('/all-histories') || location.pathname.includes('/histories-with-filter')) && <TransactionHistoriesNav />
      }
      <Switch>
        <Route path='/dashboard/transactions' exact>
          <Main />
        </Route>
        <Route path='/dashboard/transactions/all-histories'>
          <AllHistories />
        </Route>
        <Route path='/dashboard/transactions/histories-with-filter'>
          <HistoriesWithFilter />
        </Route>
      </Switch>
    </div>
  );
}

export default Transactions;