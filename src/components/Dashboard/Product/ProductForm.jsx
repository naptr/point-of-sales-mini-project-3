 import React, { useEffect, useState } from 'react';
import {  useQueryClient, useMutation, useQuery } from 'react-query';

import {
  getProductDetailsByID, 
  createProduct, 
  editProductDetails,
} from '@app/api/dashboard';
import { dashboard } from '@app/api/apis';
import { getMultipleRequest } from '@app/api/dashboard';


const ProductForm = ({ editMode, createMode, closeForm }) => {
  const queryClient = useQueryClient();
  const [ productDetailsLoading, setProductDetailsLoading ] = useState(true);
  const [ productDetails, setProductDetails ] = useState({
    product_code: '',
    image: '',
    product_name: '',
    stock: '',
    price: '',
    category_id: '',
    supplier_id: ''
  });
  const mutation = useMutation(data => handleDataSending(data));
  const {
    data: result,
    isLoading,
    isFetching,
    isError,
    error
  } = useQuery('multipleRequestQueries', () => getMultipleRequest([dashboard.get('/suppliers'), dashboard.get('/categories')]), {
    refetchOnWindowFocus: false
  })


  const getCurrentProductDetails = async () => {
    setProductDetailsLoading(true);

    try {
      const { data } = await getProductDetailsByID(editMode.item_id);
      
      setProductDetails({
        product_code: data.data.product_code,
        image: data.data.image,
        product_name: data.data.product_name,
        stock: data.data.stock,
        price: data.data.price,
        category_id: data.data.category_id,
        supplier_id: data.data.supplier_id
      })

      data && setProductDetailsLoading(false);
    } catch (error) {
      return error;
    }
  }  

  const keydownListener = (event) => {
    if (event.key == 'Escape' || event.keyCode == 27) {
      closeFormHandler();
    }
  }

  window.addEventListener('keydown', keydownListener);

  // form submit handler
  const handleSumbitProduct = (e) => {
    // mutation.mutate(data);
    e.preventDefault()
    console.log('test');
  }

  // close Form Handler
  const closeFormHandler = () => {
    const [closeCreateMode, closeEditMode] = closeForm();
    
    if (editMode.mode) {
      closeEditMode();
    } else if (createMode) {
      closeCreateMode();
    }
  }

  useEffect(() => editMode.mode && getCurrentProductDetails(), []);
  useEffect(() => !editMode.mode && setProductDetailsLoading(false), []);
  
  
  return (
    <div id="form-wrapper" className="h-full w-full flex items-center justify-center space-y-8 flex-col ">
      {
        productDetailsLoading ? (
          <h1>Loading..</h1>
        ) : (
          <>
            <h1 className="text-2xl font-caption text-gray-800">{ editMode.mode ? 'Edit' : createMode ? 'Create' : 'null' } Product</h1>
            <form onSubmit={handleSumbitProduct} className="h-4/5 w-2/5 shadow-md rounded flex flex-row p-4 space-x-4">
              <div id="left-form" className="h-full w-64 flex items-start flex-col space-y-2">
                <img src={productDetails.image} className="w-full h-64 object-cover appearance-none" />
                <p className="font-semibold font-body text-gray-800 text-sm">
                  Hanya dapat menerima file dengan ekstensi .jpeg, .jpg, dan .png.
                </p>
              </div>
              <div id="right-form" className="h-full flex-grow flex flex-col items-center space-between">
                <div id="input-forms" className="">

                </div>
                <div id="buttons" className="flex flex-row items-center h-10 w-full justify-center space-x-10 font-body">
                  <button type="button" onClick={handleSumbitProduct} className="transition-all duration-300 h-full rounded shadow bg-purple-400 hover:bg-purple-500 w-36 text-white" >
                    Save
                  </button>
                    <button type="button" onClick={closeFormHandler} className="transition-all duration-300 h-full rounded shadow hover:bg-red-500 hover:text-white text-purple-400 w-36">
                    Cancel
                  </button>
                </div>
                
              </div>
            </form>
          </>
        )
      }
    </div>
  );
}

export default ProductForm;