import React, { useEffect, useState } from 'react';
import { getProducts, getSuppliers, getCategories } from '@app/api/dashboard';
import { useQueries } from 'react-query';

const token = localStorage.getItem('token');


const Main = () => {
  const [productData, setProductData] = useState();
  const {dashboardQueries} = useQueries(
    [
      {
        queryKey: 'products',
        queryFn: getProducts
      },
      {
        queryKey: 'suppliers',
        queryFn: getSuppliers,
      },
      // {
      //   queryKey: 'categories',
      //   queryFn: getCategories
      // }
    ]
  )

  useEffect(() => console.log(dashboardQueries), [dashboardQueries]);

  return (
    <div className="">
      {/* {
        isLoading || isFetching && <h1>Loading...</h1>
      } */}
      <h1>Product Data</h1>
      {/* {
        productData && <pre className="text-xs">{JSON.stringify(productData.data, null, 2)}</pre>
      } */}
    </div>
  );
}

export default Main;