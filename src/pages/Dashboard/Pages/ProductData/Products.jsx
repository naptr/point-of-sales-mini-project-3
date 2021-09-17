import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { getProducts } from '@app/api/dashboard';


const Products = () => {
  const [page, setPage] = useState(1);

  const {
    data: {
      data: {
        data: products
      }
    }, 
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
      <div className="flex flex-row space-x-6 h-18">
        <button onClick={() => setPage(old => old - 1)} disabled={products?.current_page == 1} className="bg-purple-400">
          Previous
        </button>
        <p>{ page }</p>
        <button onClick={() => setPage(old => old + 1)} disabled={page == Math.ceil((products.total / 10), 0)}>
          Next
        </button>
      </div>
      <div className="overflow-auto flex-grow">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Stock</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              isLoading || isFetching ? (
              <span>Loading ...</span>
              ) : isError ? (
              <span>an error occured: { error } </span>
              ) : (
                //.map(data => console.log(data))
                products.data.map( (product, idx) => <ProductDataRows item={product} key={idx} /> )
                // <></>
              )
            }
          </tbody>

        </table>
      </div>
    </div>
  );
}

const ProductDataRows = ({ item }) => {
  return (
    <tr>
      <td>{ item.id }</td>
      <td>
        <img src={item.image} width="64" height="64"/>
      </td>
      <td>{ item.name }</td>
      <td>{ item.stock }</td>
      <td>{ item.category.category_name }</td>
      <td>{ item.price }</td>
    </tr>
  );
}

export default Products;