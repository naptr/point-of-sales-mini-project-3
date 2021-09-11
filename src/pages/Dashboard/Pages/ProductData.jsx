import React, { useEffect } from 'react';
import { dashboard } from '@app/api/dashboard';

const token = localStorage.getItem('token');


const ProductData = () => {

  const getProductData = async () => {
    try {
      const result = await dashboard('/admin/products', 'get', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
  }

  useEffect(() => getProductData(), []);

  return (
    <>
      <h1>Product Data</h1>
    </>
  )
}

export default ProductData;