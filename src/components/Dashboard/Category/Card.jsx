import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';

import { EditIcon, DeleteIcon } from '@app/components/Icons';
import { Fill } from '@app/components/Icons';

import { deleteCategoryByID } from '@app/api/dashboard_apis';


const Card = ({ item, edit, setLoading }) => {
  const [actionsAppear, setActionsAppear] = useState(false);
  const cardRef = useRef(null);


  /* Handlers */
  const handleActionsAppear = () => {
    setActionsAppear(!actionsAppear);
  }
  /* End of Handlers */

  return (
    <div id="card-wrapper" className="w-full h-18 flex items-start flex-row">
      <div ref={cardRef} className="py-2 px-4 bg-white hover:bg-purple-100 shadow-md flex-col justify-center active:bg-white transition-all duration-300 rounded h-full w-5/6 font-caption flex items-start font-semibold text-gray-800 z-10 cursor-pointer" onClick={handleActionsAppear}>
        <p>{ item.category_name }</p>
        <div id="category-detail" className="flex-grow w-full justify-start items-center flex flex-row space-x-2">
          <Fill name="product_data" size={18} color="#1F2937" />
          <p>{item.qty_product}</p>
        </div>
      </div>
      {
        <ActionsButton actionsAppear={actionsAppear} edit={edit} item={item} setLoading={setLoading} setActionsAppear={setActionsAppear} />
      }
    </div>
  );
}

export default Card;

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