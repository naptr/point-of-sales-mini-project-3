import React from 'react';
import { Switch, Route } from 'react-router';

import Main from './Main';
import Products from './Products';
import Categories from './Categories';


const ProductData = () => {
  return (
    <Switch>
      <Route exact path='/dashboard/product-data'>
        <Main />
      </Route>
      <Route path='/dashboard/product-data/products'>
        <Products />
      </Route>
      <Route path='/dashboard/product-data/categories'>
        <Categories />
      </Route>
    </Switch>
  );
}

export default ProductData;