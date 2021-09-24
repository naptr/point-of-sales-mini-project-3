import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

import { Card } from '@app/components/Dashboard/Category';
import { CategoryForm } from '@app/components/Dashboard/Category/CategoryForm';
import { PreviousPageIcon, NextPageIcon } from '@app/components/Icons';

import { getCategories } from '@app/api/dashboard';


const Main = () => {
  const [formActive, setFormActive] = useState(false);
  const [currentCategoryID, setCurrentCategoryID] = useState(null);

  const {
    data: categories,
    isLoading,
    isFetching,
    isSuccess,
    error
  } = useQuery('categories', getCategories);

  /* Handlers */
  const handleFormAppear = id => {
    setFormActive(true);

    id && setCurrentCategoryID(id);
  }
  /* End of Handlers */

  return formActive ? (
    <CategoryForm id={currentCategoryID} />
  ) : (
    <div className="flex flex-col flex-grow justify-between relative">
      <div id="products-list-title" className="w-full h-10 flex justify-between items-center text-purple-500">
        <h2 className="text-xl font-semibold italic font-caption">Products List</h2>
        <button id="add-products" className="h-full hover:bg-green-100 w-28 rounded flex items-center justify-center font-caption text-sm text-green-400 transition-all duration-300" onClick={() => handleFormAppear()}>
          <p>New Categories</p>
        </button>
      </div>
      <div id="categories-container" className="min-h-custom w-full grid grid-cols-5 gap-4 place-content-start">
        {
          isLoading && <h1>Loading...</h1>
        }
        {
          categories?.data.data.map(category => <Card item={category} key={category.id} edit={handleFormAppear} />)
        }
      </div>
      <div className="flex flex-row h-8 max-w-max font-caption text-sm bg-purple-200">
        <button className="px-2 transition-all disabled:opacity-50 text-purple-500 font-semibold duration-300 flex items-center justify-center hover:bg-purple-300"
        // onClick={() => setPage(1)} disabled={products?.data.data.current_page == 1}
        >
          First
        </button>
        <button className="disabled:opacity-50 transition-all duration-300 w-8 flex items-center justify-center hover:bg-purple-300"
        // onClick={() => setPage(old => old - 1)} disabled={products?.data.data.current_page == 1}
        >
          <PreviousPageIcon size="20" />
        </button>
        <div className="transition-all duration-300 w-8 flex items-center justify-center text-purple-500 font-semibold">
          {/* <p>{page}</p> */}
        </div>
        <button className="disabled:opacity-50 transition-all duration-300 w-8 flex items-center justify-center hover:bg-purple-300"
        // onClick={() => setPage(old => old + 1)} disabled={page == setTotalPage(products?.data.data.total)}
        >
          <NextPageIcon size="20" />
        </button>
        <button className="px-2 transition-all disabled:opacity-50 text-purple-500 font-semibold duration-300 flex items-center justify-center hover:bg-purple-300"
        // onClick={() => setPage(setTotalPage(products?.data.data.total))} disabled={products?.data.data.current_page == (setTotalPage(products?.data.data.total))}
        >
          Last
        </button>
      </div>
    </div>
  )
}

export default Main;