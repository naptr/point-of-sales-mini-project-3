import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSnapshot } from 'valtio';

import Main from './Main';
import CategoryDetails from './CategoryDetail';

import { store } from '@app/utils/state-management/proxy';


const Categories = () => {
  const snap = useSnapshot(store);

  return (
    <Switch>
      <Route path={`${snap.dashboard_url}/product-data/categories`} exact>
        <Main />
      </Route>
      <Route path={`${snap.dashboard_url}/product-data/categories/category-details`}>
        <CategoryDetails />
      </Route>
    </Switch>
  );
}

export default Categories;