import React, { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { editCategory, createCategory } from '@app/api/dashboard';


export const CategoryForm = ({ id }) => {
  const queryClient = useQueryClient();
  // const [editMode, setEditMode] = useState(false);
  // const [createMode, setCreateMode] = useState(false);
  const [mode, setMode] = useState({
    edit: false,
    create: false
  })
  const [categoryName, setCategoryName] = useState('');

  const mutation = useMutation(data => submitMutation(data), {
    onSuccess: () => queryClient.invalidateQueries('categories')
  })

  /* Functions */
  const submitMutation = async data => {
    const response = mode.edit ? await editCategory(data, id) : await createCategory(data);

    return response;
  }

  /* Handlers */
  const handleFormSubmit = () => {
    const formData = new FormData;
    formData.append('category_name', categoryName);

    mutation.mutate(formData);
  }

  /* End of Handlers*/

  useEffect(() => id ? setMode({...mode, edit: true}) : setMode({...mode, create: true}), [])

  return (
    <div id="category-form-wrapper" className="h-full w-full flex items-center justify-center">
      <form onSubmit={handleFormSubmit}>
        <div id="input-wrapper">
          <input />
        </div>
        <div id="buttons-wrapper">
          <input type='submit' value={mode.edit ? 'Save' : 'Create'} />
        </div>
      </form>
    </div>
  );
}