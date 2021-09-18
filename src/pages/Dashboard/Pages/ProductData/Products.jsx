import React, { useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';

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

  // useEffect(() => console.log(products), [products]);

  return (
    <div className="flex flex-col flex-grow">
      <div id="content-wrapper" className="flex min-h-96 w-full flex-row">
        <div id="content-table-wrapper" className="flex flex-col min-h-md justify-between">
          <div id="table-wrapper" className="flex flex-col">
            <div id="table-head" className="h-16 w-full flex flex-row items-center space-x-4">
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
            <div id="table-body-wrapper" className="w-full flex flex-col">
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
          <div className="flex flex-row space-x-6 h-10">
            <button onClick={() => setPage(1)} disabled={products?.data.data.current_page == 1}>
              1
            </button>
            <button onClick={() => setPage(old => old - 1)} disabled={products?.data.data.current_page == 1} className="bg-purple-400">
              -
            </button>
            <p>{page}</p>
            <button onClick={() => setPage(old => old + 1)} disabled={page == Math.ceil((products?.data.data.total / 10), 0)}>
              +
            </button>
            <button onClick={() => setPage(Math.ceil(products?.data.data.total / 10, 0))} disabled={products?.data.data.current_page == Math.ceil(Math.ceil(products?.data.data.total / 10, 0))}>
              { Math.ceil(products?.data.data.total / 10, 0) }
            </button>
          </div>
        </div>
        <div id="another-content" className="flex-grow flex items-center justify-center">
          <p className="text-9xl font-title text-purple-500">{ page }</p>
        </div>
      </div>
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

  useEffect(() => console.log(idx), [idx]);

  return (
    <div id="table-body-row" className="h-16 w-full flex flex-row space-x-4 items-center">
      {
        bodyDatas.map(body => (
          <ProductsRowComponent id={body.id} className={body.classes}>
            { body.child }
          </ProductsRowComponent>
        ))
      }
      <ProductsRowComponent id="actions" className="px-4 w-24 flex flex-row items-center justify-around">
        <div className="px-2"> Edit </div>
        <button className="px-2" onClick={handleDeleteItem}>
          -
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