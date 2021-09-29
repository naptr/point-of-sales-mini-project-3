import React, { useState } from 'react';

import { AddressIcon, PhoneIcon, EditIcon, DeleteIcon } from '@app/components/Icons';
import { useMutation, useQueryClient } from 'react-query';
import { deleteSupplierByID } from '@app/api/dashboard_apis';


const Card = ({ item, formAppear }) => {
  const [actionsAppear, setActionsAppear] = useState(false);

  /* Handlers */
  const handleActionsButton = () => {
    setActionsAppear(!actionsAppear);
  }

  return (
    <div id="supplier-card" className="h-48 relative flex flex-row items-center justify-center space-x-1">
      <SupplierCard item={item} setActionsAppear={handleActionsButton} />
      <ActionsButton appear={actionsAppear} handleFormAppear={() => formAppear(item)} id={item.id} />
    </div>
  )
}

export default Card;

const SupplierCard = ({ item, setActionsAppear }) => {
  return (
    <div id="card-content" className="transition-all duration-300 bg-white shadow-around h-full w-11/12 flex flex-col items-start py-7 px-4 justify-between rounded cursor-pointer hover:bg-purple-50 active:shadow-none z-10" onClick={setActionsAppear}>
      <div id="card-title" className="w-full flex flex-row items-center justify-start space-x-2 h-14">
        <div id="card-image" className="h-full w-14 bg-purple-400 rounded-full flex items-center justify-center">
          <p className="text-2xl font-semibold font-caption text-white">{item.supplier_name[0]}</p>
        </div>
        <p className="text-lg font-semibold font-caption text-gray-800">{item.supplier_name}</p>
      </div>
      <div id="card-body" className="flex flex-col items-start justify-center w-full pl-2">
        <div id="address" className="w-full flex flex-row items-start h-10 justify-start space-x-2">
          <AddressIcon size="24px" color="#1F2937" />
          <p className="text-gray-800 font-caption text-sm w-64">{item.address}</p>
        </div>
        <div id="phone_number" className="w-full flex flex-row items-center justify-start space-x-2">
          <PhoneIcon size="24px" color="#1F2937" />
          <p className="text-gray-800 font-caption text-sm">{item.phone_number}</p>
        </div>
      </div>
    </div>
  );
}


const ActionsButton = ({ appear, handleFormAppear, id }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    id => deleteSupplierByID(id),
    {
      onSuccess: () => queryClient.invalidateQueries('suppliers')
    }
  );

  const handleDeleteItem = () => {
    mutation.mutate(id)
  }

  return (
    <div id="actions-button" className="h-full flex-shrink flex items-end flex-col justify-start space-y-2">
      <button id="edit" className={`rounded h-8 w-8 flex items-center justify-center transform transition-all duration-300 ease-in-out ${appear ? 'translate-x-0 opacity-1 hover:bg-yellow-100 active:bg-white' : '-translate-x-36 opacity-0.5'}`} onClick={handleFormAppear}>
        <EditIcon size="26px" />
      </button>
      <button id="delete" className={`rounded h-8 w-8 flex items-center justify-center transform transition-all duration-500 ease-in-out ${appear ? 'translate-x-0 opacity-1 hover:bg-red-100 active:bg-white' : '-translate-x-36 opacity-0.5'}`} onClick={handleDeleteItem}>
        <DeleteIcon size="24px" />
      </button>
    </div>
  );
}