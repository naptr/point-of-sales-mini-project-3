import React, { useEffect, useState } from 'react';
import { getProductsData } from '@app/api/dashboard';

const token = localStorage.getItem('token');


const Main = () => {
  const [productData, setProductData] = useState();

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