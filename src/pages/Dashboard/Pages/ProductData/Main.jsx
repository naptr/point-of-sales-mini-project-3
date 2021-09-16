import React from 'react';
import { Link } from 'react-router-dom';

import { product_data } from '@app/utils/utils';


const Main = () => {

  return (
    <div id="product-data-container" className="w-full flex items-center justify-center flex-row flex-grow">
      {product_data.map( product => <ProductDataLinkCard item={product} /> )}
    </div>
  );
}

const ProductDataLinkCard = ({ item }) => {
  const { path, state } = item;

  return (
    <Link to={path} className="h-12">
      <p>{ state.textContent }</p>
    </Link>
  )
}

export default Main;