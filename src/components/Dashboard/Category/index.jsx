import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';

import { EditIcon, DeleteIcon } from '@app/components/Icons';

import { deleteCategoryByID } from '@app/api/dashboard';


export const Card = ({ item, edit, setLoading }) => {
  const [actionsAppear, setActionsAppear] = useState(false);
  const cardRef = useRef(null);


  /* Handlers */
  const handleActionsAppear = () => {
    setActionsAppear(!actionsAppear);
  }
  /* End of Handlers */

  // mutation.isLoading && setLoading(true);
  // mutation.isSuccess && setLoading(false);

  return (
    <div id="card-wrapper" className="w-full h-18 flex items-start flex-row justify-start">
      <div ref={cardRef} className="bg-purple-100 hover:shadow-md active:shadow-none transition-all duration-300 rounded h-full w-5/6 font-caption flex items-center justify-center font-semibold text-gray-800 z-10 cursor-pointer" onClick={handleActionsAppear}>
        <p>{ item.category_name }</p>
      </div>
      {
        <ActionsButton actionsAppear={actionsAppear} edit={edit} item={item} setLoading={setLoading} setActionsAppear={setActionsAppear} />
      }
    </div>
  );
}

const ActionsButton = ({ actionsAppear, edit, item, setLoading, setActionsAppear }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(id => deleteCategoryByID(id), {
    onMutate: () => setLoading(true),
    onSuccess: () => {
      setLoading(false);
      setActionsAppear(false);
      queryClient.invalidateQueries('categories');
    }
  })

  // mutation.isLoading && setLoading(true);

  /* Handlers */
  const handleEditCategory = () => {
    edit(item);
  }

  const handleDeleteCategory = () => {
    mutation.mutate(item.id);
  }
  /* End of Handlers */

  return (
    <div className="h-10 flex-grow flex items-center flex-row justify-evenly z-0">
      <button id="edit-action" className={`transition-all duration-500 transform ${actionsAppear ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'} h-full w-10 flex items-center justify-center hover:bg-yellow-100 active:bg-white`} onClick={handleEditCategory}>
        <EditIcon size="24px" />
      </button>
    <button id="delete-action" className={`transition-all duration-500 transform ${actionsAppear ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-40'} h-full w-10  flex items-center justify-center hover:bg-red-100 active:bg-white`} onClick={handleDeleteCategory}>
        <DeleteIcon size="22px" />
      </button>
    </div>
  );
}