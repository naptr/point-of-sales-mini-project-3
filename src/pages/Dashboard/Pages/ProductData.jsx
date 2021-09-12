import React, { useEffect, useState } from 'react';
import { dashboard } from '@app/api/dashboard';

const token = localStorage.getItem('token');


const ProductData = () => {
  const [productData, setProductData] = useState();

  const getProductData = async () => {
    try {
      const result = await dashboard('/admin/products', 'get', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      setProductData(result);
    } catch (err) {
      throw new Error(err);
    }
  }

  useEffect(() => getProductData(), []);

  return (
    <>
      <h1>Product Data</h1>
      {
        productData && <pre>{JSON.stringify(productData, null, 2)}</pre>
      }
    </>
  );
}

export default ProductData;