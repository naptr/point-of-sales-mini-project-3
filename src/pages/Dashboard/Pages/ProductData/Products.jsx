import React, { useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';

import { EditIcon, DeleteIcon, PreviousPageIcon, NextPageIcon } from '@app/components/Icons';

import { getProducts, deleteProductByID } from '@app/api/dashboard';
import { products_table_heads, setProductsItemList, itemNumberByPage } from '@app/utils/utils';


const Products = () => {
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

  const setTotalPage = (totalItem) => {
    return Math.ceil(totalItem / 10, 0);
  }

  return (
    <div className="flex flex-col flex-grow justify-between">
      {/* <div id="content-wrapper" className="flex min-h-96 w-full flex-row"> */}
        <div id="products-list-title" className="w-full ">
          <h2>Products List</h2>
        </div>
        <div id="content-table-wrapper" className="flex flex-col justify-between">
          <div id="table-wrapper" className="flex flex-col min-h-custom max-w-min">
            <div id="table-head" className="h-12 flex flex-row items-center space-x-4 bg-purple-100">
              <>
                {
                  products_table_heads.map(head => (
                    <ProductsRowComponent id={head.id} className={head.classes} key={head.id}>
                      {head.textContent}
                    </ProductsRowComponent>
                  ))
                }
              </>
              <ProductsRowComponent id="actions" className="px-4 w-24 flex items-center justify-center">
                <p>Actions</p>
              </ProductsRowComponent>
            </div>
            <div id="table-body-wrapper" className="w-full flex flex-col h-custom-height items-center">
              {
                isLoading || isFetching ? (
                  <span>Loading ...</span>
                ) : isError ? (
                  <span>an error occured: { error } </span>
                ) : (
                  //.map(data => console.log(data))
                    products.data.data.data.map((product, idx) => (
                      <ProductDataRows item={product} key={idx} idx={itemNumberByPage(products?.data.data.current_page, idx, (products?.data.data.data).length)} />
                    ))
                  // <></>
                )
              }
            </div>
          </div>
        </div>
        <div className="flex flex-row h-8 max-w-max font-caption text-sm bg-purple-100">
          <button className="px-2 transition-all duration-300 flex items-center justify-center hover:bg-purple-200" onClick={() => setPage(1)} disabled={products?.data.data.current_page == 1}>
            First
          </button>
          <button className="disabled:opacity-50 transition-all duration-300 w-8 flex items-center justify-center hover:bg-purple-200" onClick={() => setPage(old => old - 1)} disabled={products?.data.data.current_page == 1}>
            <PreviousPageIcon size="20" />
          </button>
          <div className="transition-all duration-300 w-8 flex items-center justify-center font-bold text-purple-500">
            <p>{page}</p>
          </div>
          <button className="disabled:opacity-50 transition-all duration-300 w-8 flex items-center justify-center hover:bg-purple-200" onClick={() => setPage(old => old + 1)} disabled={page == setTotalPage(products?.data.data.total)}>
            <NextPageIcon size="20" />
          </button>
          <button className="px-2 transition-all duration-300 flex items-center justify-center hover:bg-purple-200" onClick={() => setPage(setTotalPage(products?.data.data.total))} disabled={products?.data.data.current_page == (setTotalPage(products?.data.data.total))}>
            Last
          </button>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Products;

const ProductDataRows = ({ item, idx }) => {
  const bodyDatas = setProductsItemList(item, ( idx ));
  const queryClient = useQueryClient();
  const mutation = useMutation(id => deleteProductByID(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
      // console.log(data);
    }
  });


  const handleDeleteItem = () => {
    // console.log(e);
    mutation.mutate(item.id);
  }

  return (
    <div id="table-body-row" className="h-18 w-full flex flex-row space-x-4 items-center">
      {
        bodyDatas.map((body, idx) => (
          <ProductsRowComponent id={body.id} className={body.classes} key={idx}>
            { body.child }
          </ProductsRowComponent>
        ))
      }
      <ProductsRowComponent id="actions" className="px-4 w-24 flex flex-row items-center justify-around">
        <div className="transition-all flex items-center justify-center h-7 w-7 duration-300 p-1 rounded hover:bg-green-100">
          <EditIcon size="20" />
        </div>
        <button className="h-7 w-7 transition-all flex items-center justify-center duration-300 p-1 rounded hover:bg-red-100" onClick={handleDeleteItem}>
          <DeleteIcon size="19" />
        </button>
      </ProductsRowComponent>
      {
        mutation.isLoading && <p>Loading...</p>
      }
    </div>
  );
}

const ProductsRowComponent = (props) => {
  const { children } = props;

  return (
    <div {...props}>
      { children }
    </div>
  );
}

const PaginationButton = (props) => {
  const { children } = props;

  return (
    <button {...props}>
      { children }
    </button>
  );
}