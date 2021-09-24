import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { EditIcon, DeleteIcon } from '@app/components/Icons';


export const Card = ({ item, identifier }) => {
  const [actionsAppear, setActionsApper] = useState(false);
  const cardRef = useRef(null);


  /* Handlers */
  const handleActionsAppear = () => {
    setActionsApper(!actionsAppear);
  }
  /* End of Handlers */

  useEffect(() => console.log(item), []);

  return (
    <div id="card-wrapper" className="w-full h-12 flex items-center flex-row justify-start">
      <div ref={cardRef} className="bg-purple-100 hover:shadow-md active:shadow-none transition-all duration-300 rounded h-full w-5/6 font-caption flex items-center justify-center font-semibold text-gray-800 z-10 cursor-pointer" onClick={handleActionsAppear}>
        <p>{ item.category_name }</p>
      </div>
      {
        <ActionsButton actionsAppear={actionsAppear} />
      }
    </div>
  );
}

const ActionsButton = ({ actionsAppear }) => {

  return (
    <div className="h-full flex-grow flex items-center flex-row justify-evenly z-0">
      <button id="edit-action" className={`transition-all duration-500 transform ${actionsAppear ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'} h-full w-10 flex items-center justify-center hover:bg-yellow-100`}>
        <EditIcon size="24px" />
      </button>
    <button id="delete-action" className={`transition-all duration-500 transform ${actionsAppear ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-40'} h-full w-10  flex items-center justify-center hover:bg-red-100`}>
        <DeleteIcon size="22px" />
      </button>
    </div>
  );
}