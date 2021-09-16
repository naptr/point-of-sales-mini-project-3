import React from 'react';
import { Switch, Route, Link, useLocation } from 'react-router-dom';

import Main from './Main';
import Products from './Products';
import Categories from './Categories';
import ProductNav from '@app/components/Dashboard/Product/ProductNav';


const ProductData = () => {
  const location = useLocation();

  return (
    <>
      {
        (location.pathname.includes('/products') || location.pathname.includes('/categories')) && <ProductNav />
      }
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