import React, { useEffect, useState } from 'react';
import { useQueries } from 'react-query';

import { getProducts, getSuppliers, getCategories } from '@app/api/dashboard';


const token = localStorage.getItem('token');

const Main = () => {
  // const [productData, setProductData] = useState();
  // const [products, suppliers] = useQueries(
  //   [
  //     {
  //       queryKey: 'products',
  //       queryFn: getProducts
  //     },
  //     {
  //       queryKey: 'suppliers',
  //       queryFn: getSuppliers,
  //     },
  //     // {
  //     //   queryKey: 'categories',
  //     //   queryFn: getCategories
  //     // }
  //   ]
  // )

  // useEffect(() => console.log(products, suppliers), [products && suppliers]);

  return (
    <div className="">
      <h1>Product Data</h1>
      {/* {
        productData && <pre className="text-xs">{JSON.stringify(productData.data, null, 2)}</pre>
      } */}
    </div>
  );
}

export default Main;