import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import MainDashboard from './MainDashboard';
import ProductList from './ProductList';


const Dashboard = () => {
  return (
    <>
      
      <Link to='/dashboard/product-list'>Product List</Link>
      <Link to='/dashboard'>Dashboard</Link>
      <Switch>
        <Route path='/dashboard' exact>
          <MainDashboard />
        </Route>
        <Route path='/dashboard/product-list'>
          <ProductList />
        </Route>
      </Switch>
    </>
  );
}

export default Dashboard;