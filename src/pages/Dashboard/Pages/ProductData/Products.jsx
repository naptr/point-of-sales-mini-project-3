import React, {  useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { PreviousPageIcon, NextPageIcon } from '@app/components/Icons';
import Loader from '@app/components/Loader';
import ProductTable from '@app/components/Dashboard/Product/ProductTable';
import ProductForm from '@app/components/Dashboard/Product/ProductForm';

import { getProducts } from '@app/api/dashboard';
import { products_table_heads } from '@app/utils/utils';


const Products = () => {
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState({ // edit Product Form Handler 
    mode: false,
    item_id: ''
  });
  const [createMode, setCreateMode] = useState(false);

  // Pagination and Data Consts
  const [page, setPage] = useState(1);
  const {
    data: products,
    isLoading, 
    isFetching,
    isError,
    error,
  } = useQuery(['products', page], () => getProducts(page), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  // Create Product Form Consts
  const [formAppear, setFormAppear] = useState(false);

  // data loading handler
  const dataLoadingHandler = (isLoading) => {
    setLoading(isLoading);
  }

  // Pagination Handler
  const setTotalPage = (totalItem) => {
    return Math.ceil(totalItem / 10, 0);
  }

  // Form Appear Handler
  const formAppearHandler = () => {
    setFormAppear(!formAppear);
  }

  // new Product Form Handler
  const newProductHandler = () => {
    setCreateMode(true);
    formAppearHandler();
  }

  // close form handler

  // edit Mode
  const closeEditModeHandler = () => {
    setEditMode({
      mode: false,
      item_id: ''
    }),
    formAppearHandler();
  }
  // createMode
  const closeCreateModeHandler = () => {
    setCreateMode(false);
    formAppearHandler();
  }

  return formAppear ? (
    <ProductForm editMode={editMode} createMode={createMode} closeForm={() => [
      () => closeCreateModeHandler(), 
      () => closeEditModeHandler()
    ]} />
  ) : (
    <div className="flex flex-col flex-grow justify-between relative">
      {
        loading && 
        <div id="data-fetch-loader" className="absolute -top-10 right-2 p-1 rounded-full bg-white shadow-md flex items-center justify-center">
          <Loader type="ClipLoader" size="24px" color="#8B5CF6" />
        </div>
      }
      <div id="products-list-title" className="w-full h-10 flex justify-between items-center text-purple-500">
        <h2 className="text-xl font-semibold italic font-caption">Products List</h2>
        <button id="add-products" className="h-full hover:bg-green-100 w-28 rounded flex items-center justify-center font-caption text-sm text-green-400 transition-all duration-300" onClick={newProductHandler}>
          <p>New Product</p>
        </button>
      </div>
      <ProductTable tableBodyData={products?.data.data} tableHeadData={products_table_heads} loading={isLoading} fetching={isFetching} error={isError} errorMessage={error} handleLoading={dataLoadingHandler} editMode={setEditMode} handleFormAppear={formAppearHandler} />
      <div className="flex flex-row h-8 max-w-max font-caption text-sm bg-purple-200">
        <button className="px-2 transition-all disabled:opacity-50 text-purple-500 font-semibold duration-300 flex items-center justify-center hover:bg-purple-300" onClick={() => setPage(1)} disabled={products?.data.data.current_page == 1}>
          First
        </button>
        <button className="disabled:opacity-50 transition-all duration-300 w-8 flex items-center justify-center hover:bg-purple-300" onClick={() => setPage(old => old - 1)} disabled={products?.data.data.current_page == 1}>
          <PreviousPageIcon size="20" />
        </button>
        <div className="transition-all duration-300 w-8 flex items-center justify-center text-purple-500 font-semibold">
          <p>{page}</p>
        </div>
        <button className="disabled:opacity-50 transition-all duration-300 w-8 flex items-center justify-center hover:bg-purple-300" onClick={() => setPage(old => old + 1)} disabled={page == setTotalPage(products?.data.data.total)}>
          <NextPageIcon size="20" />
        </button>
        <button className="px-2 transition-all disabled:opacity-50 text-purple-500 font-semibold duration-300 flex items-center justify-center hover:bg-purple-300" onClick={() => setPage(setTotalPage(products?.data.data.total))} disabled={products?.data.data.current_page == (setTotalPage(products?.data.data.total))}>
          Last
        </button>
      </div>
    </div>
  )
}

export default Products;