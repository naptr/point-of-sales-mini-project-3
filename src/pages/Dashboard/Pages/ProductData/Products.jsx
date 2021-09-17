import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { getProducts } from '@app/api/dashboard';


const Products = () => {
  const [page, setPage] = useState(1);

  const {
    // data: {
    //   data: {
    //     data: products
    //   }
    // }, 
    data: products,
    isLoading, 
    isFetching,
    isError,
    isSuccess,
    error,
    isPreviousData,
  } = useQuery(['products', page], () => getProducts(page), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  useEffect(() => console.log(products), [products]);

  return (
    <div className="flex flex-col flex-grow">
      <div id="content-wrapper" className="flex h-full w-full flex-row">
        <div id="content-table-wrapper" className="flex h-full flex-col">
          <div id="table-wrapper" className="flex flex-col">
            <div id="table-head" className="h-16 w-full flex flex-row items-center space-x-4">
              <div id="product-id" className="px-4 w-24 flex items-center justify-center">
                <p>ID</p>
              </div>
              <div id="product-image" className="px-4 w-20 flex items-center justify-start">
                <p>Image</p>
              </div>
              <div id="product-name" className="px-4 w-96 flex items-center justify-start">
                <p>Name</p>
              </div>
              <div id="product-category" className="px-4 w-40 flex items-center justify-start">
                <p>Category</p>
              </div>
              <div id="product-stock" className="px-4 w-24 flex items-center justify-start">
                <p>Stock</p>
              </div>
              <div id="product-price" className="px-4 w-48 flex items-center justify-startx">
                <p>Price</p>
              </div>
              <div id="actions" className="px-4 w-24 flex items-center justify-center">
                <p>Actions</p>
              </div>
            </div>
            {
              isLoading || isFetching ? (
                <span>Loading ...</span>
              ) : isError ? (
                <span>an error occured: { error } </span>
              ) : (
                //.map(data => console.log(data))
                <div id="table-body-wrapper" className="w-full flex flex-col">
                  {products.data.data.data.map((product, idx) => (
                    <ProductDataRows item={product} key={idx} />
                  ))}
                </div>
                // <></>
              )
            }
          </div>
          <div className="flex flex-row space-x-6 h-10">
            <button onClick={() => setPage(old => old - 1)} disabled={products?.data.data.current_page == 1} className="bg-purple-400">
              Previous
            </button>
            <p>{page}</p>
            <button onClick={() => setPage(old => old + 1)} disabled={page == Math.ceil((products?.data.data.total / 10), 0)}>
              Next
            </button>
          </div>
        </div>
        <div id="another-content" className="flex-grow flex items-center justify-center">
          { page }
        </div>
      </div>
    </div>
  );
}

const ProductDataRows = ({ item }) => {
  return (
    <div id="table-body-row" className="h-16 w-full flex flex-row space-x-4 items-center">
      <div className="px-4 w-24 flex items-center justify-center">{ item.id }</div>
      <div className="px-4 w-20 flex items-center justify-start">
        <img src={item.image} width="48" height="48"/>
      </div>
      <div className="px-4 w-96 flex items-center justify-start">{ item.product_name }</div>
      <div className="px-4 w-40 flex items-center justify-start">{ item.category.category_name }</div>
      <div className="px-4 w-24 flex items-center justify-start">{ item.stock }</div>
      <div className="px-4 w-48 flex items-center justify-start">{ item.price }</div>
      <div id="actions" className="px-4 w-24 flex flex-row items-center justify-around">
        <div className="px-2"> Edit </div>
        <div className="px-2"> Delete </div>
      </div>
    </div>
  );
}

export default Products;