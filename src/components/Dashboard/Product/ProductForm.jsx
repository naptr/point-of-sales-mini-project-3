import React, { useState } from 'react';
import { useQueries, useQueryClient, useMutation } from 'react-query';

import { getProductDetailsByID, createProduct, editProductDetails } from '@app/api/dashboard';


const ProductForm = () => {
  const queryClient = useQueryClient();
  const 
  const [productDetails, setProductDetails] = useState({
    product_code: '',
    product_name: '',
    image: '',
    stock: '',
    price: '',
    category_id: '',
    supplier_id: ''
  });
  const mutation = useMutation(data => handleDataSending(data));
  
  const handleSumbitProduct = () => {
    mutation.mutate(data);
  }

  return (
    <div id="form-wrapper" className="h-full w-full flex items-center justify-center">
      <form onSubmit={handleSumbitProduct}>

      </form>
    </div>
  );
}