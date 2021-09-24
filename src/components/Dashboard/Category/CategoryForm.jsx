import React, { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { Loader } from '@app/components/Loader';

import { editCategory, createCategory } from '@app/api/dashboard';


export const CategoryForm = ({ currentCategoryData, closeForm }) => {
  const queryClient = useQueryClient();
  const [categoryName, setCategoryName] = useState('');

  const mutation = useMutation(data => submitMutation(data), {
    onSuccess: () => queryClient.invalidateQueries('categories')
  })

  /* Functions */
  const submitMutation = async data => {
    const response = currentCategoryData ? await editCategory(data, currentCategoryData.id) : await createCategory(data);

    return response;
  }

  /* Handlers */
  const handleFormSubmit = event => {
    const formData = new FormData;
    formData.append('category_name', categoryName);
    
    mutation.mutate(formData);
    // console.log(categoryName);
    event.preventDefault();
  }

  const handleInputChange = e => {
    setCategoryName(e.target.value);
  }

  /* End of Handlers*/

  useEffect(() => currentCategoryData && setCategoryName(currentCategoryData.category_name), []);

  return (
    <div id="category-form-wrapper" className="h-full w-full flex flex-col items-center justify-center space-y-12 relative">
      {
        mutation.isLoading && 
        <div id="data-fetch-loader" className="absolute top-10 right-10 p-1 rounded-full bg-white shadow-md flex items-center justify-center z-10">
          <Loader type="ClipLoader" size="24px" color="#8B5CF6" />
        </div>
      }
      <h1 className="text-2xl font-caption text-gray-800">{currentCategoryData ? 'Edit' : 'Create'} Category</h1>
      <form onSubmit={handleFormSubmit} className="w-full flex items-center justify-center flex-col space-y-4">
        <div id="input-wrapper">
          <input value={categoryName} onChange={handleInputChange} className="transition-colors duration-300 bg-purple-50 w-56 h-10 px-2 border-2 border-opacity-0 focus:outline-none rounded focus:border-purple-400 focus:border-opacity-100 hover:bg-purple-100" />
        </div>
        <div id="buttons-wrapper" className="flex flex-row items-center space-x-2 px-2">
          <button type="button" onClick={closeForm} className="transition-all duration-300 rounded shadow hover:bg-red-400 hover:text-white text-red-400 w-24 h-10">
            Cancel
          </button>
          <input type='submit' value={currentCategoryData ? 'Save' : 'Create'} className="transition-all duration-300 rounded shadow cursor-pointer bg-white hover:bg-purple-400 w-24 text-purple-400 hover:text-white h-10" />
        </div>
      </form>
    </div>
  );
}