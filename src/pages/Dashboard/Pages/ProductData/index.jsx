import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Main from './Main';
import Products from './Products';
import Categories from './Categories';


const ProductData = () => {
  return (
    <>
      <Link to='/dashboard/product-data/products'>Products</Link>
      <Link to='/dashboard/product-data/categories'>Categories</Link>

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
    </>
  );
}

export default ProductData;