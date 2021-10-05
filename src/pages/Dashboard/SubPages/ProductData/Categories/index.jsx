import React, { useState } from 'react';
import { useQuery } from 'react-query';

import Card from '@app/components/Dashboard/Category/Card';
import { CategoryForm } from '@app/components/Dashboard/Category/CategoryForm';
import { PreviousPageIcon, NextPageIcon } from '@app/components/Icons';
import Loader from '@app/components/Loader';

import { getCategories } from '@app/api/dashboard_apis';


const Categories = () => {
  const [formActive, setFormActive] = useState(false);
  const [currentCategoryData, setCurrentCategoryData] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    data: categories,
    isLoading,
  } = useQuery('categories', getCategories, {
    refetchOnWindowFocus: false
  });

  /* Handlers */
  const handleFormAppear = data => {
    setFormActive(!formActive);

    (data != undefined) && setCurrentCategoryData(data);
  }

  const handleCloseForm = () => {
    setFormActive(!formActive)
  }
  /* End of Handlers */

  return formActive ? (
    <>
      {
        loading &&
        <div id="loader" className="absolute top-20 right-8 p-1 rounded-full bg-white shadow-md flex items-center justify-center">
          <Loader type="ClipLoader" size="24px" color="#8B5CF6" />
        </div>
      }
      <CategoryForm currentCategoryData={currentCategoryData} closeForm={handleCloseForm} setLoading={setLoading} />
    </>
  ) : (
    <div className="flex flex-col flex-grow justify-between relative">
      {
        loading &&
        <div id="loader" className="absolute -top-10 right-2 p-1 rounded-full bg-white shadow-md flex items-center justify-center">
          <Loader type="ClipLoader" size="24px" color="#8B5CF6" />
        </div>
      }
      <div id="categories-list-title" className="w-full h-10 flex justify-between items-center text-purple-500">
        <h2 className="text-xl font-semibold italic font-caption">Category List</h2>
        <button id="add-categories" className="h-full hover:bg-green-100 w-28 rounded flex items-center justify-center font-caption text-sm text-green-400 transition-all duration-300" onClick={() => handleFormAppear()}>
          <p>New Categories</p>
        </button>
      </div>
      {
        isLoading && 
        <div id="Loader" className="h-full w-full flex items-center justify-center">
          <Loader type="BarLoader" speedMultiplier={2} width={100} height={4} color="#8B5CF6" />
        </div>
      }
      {
        categories && 
        (<div id="categories-container" className="min-h-custom w-full grid grid-cols-5 gap-4 place-content-start">
          {
            categories?.data.data.map(category => <Card item={category} key={category.id} edit={handleFormAppear} setLoading={setLoading} />)
          }
        </div>)
      }
      <div className="flex flex-row h-8 max-w-max font-caption text-sm bg-purple-200">
        <button className="px-2 transition-all disabled:opacity-50 text-purple-500 font-semibold duration-300 flex items-center justify-center hover:bg-purple-300">
          First
        </button>
        <button className="disabled:opacity-50 transition-all duration-300 w-8 flex items-center justify-center hover:bg-purple-300">
          <PreviousPageIcon size="20" />
        </button>
        <div className="transition-all duration-300 w-8 flex items-center justify-center text-purple-500 font-semibold">
        </div>
        <button className="disabled:opacity-50 transition-all duration-300 w-8 flex items-center justify-center hover:bg-purple-300">
          <NextPageIcon size="20" />
        </button>
        <button className="px-2 transition-all disabled:opacity-50 text-purple-500 font-semibold duration-300 flex items-center justify-center hover:bg-purple-300">
          Last
        </button>
      </div>
    </div>
  )
}

export default Categories;