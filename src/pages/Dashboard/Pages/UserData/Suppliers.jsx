import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import Card from '@app/components/Dashboard/UserData/Supplier/Card';
import Loader from '@app/components/Loader';

import { getSuppliers } from '@app/api/dashboard';
import SupplierForm from '@app/components/Dashboard/UserData/Supplier/SupplierForm';

const Suppliers = () => {
  const [formAppear, setFormAppear] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentItem, setCurrentItem] = useState('');

  const {
    data: suppliers,
    isLoading,
  } = useQuery('suppliers', getSuppliers, {
    refetchOnWindowFocus: false
  });

  /* Handlers */
  const handleFormAppear = item => {
    if (editMode) {
      setCurrentItem('');
      setEditMode(false);
    } else if (item && !editMode) {
      setCurrentItem(item);
      setEditMode(true);
    }

    setFormAppear(!formAppear);
  }

  return formAppear ? (
    <SupplierForm closeForm={handleFormAppear} currentItem={currentItem} />
  ) : (
    <div id="suppliers-container-wrapper" className="flex flex-col flex-grow justify-between relative">
      <div id="suppliers-list-title" className="w-full h-10 flex justify-between items-center text-purple-500">
        <h2 className="text-xl font-semibold italic font-caption">Suppliers List</h2>
        <button id="add-suppliers" className="h-full hover:bg-green-100 active:bg-white w-28 rounded flex items-center justify-center font-caption text-sm text-green-400 transition-all duration-300" onClick={() => handleFormAppear()}>
          <p>New Suppliers</p>
        </button>
      </div>
      {
        isLoading && 
        <div id="loader-wrapper" className="h-full w-full flex items-center justify-center">
          <Loader type="BarLoader" width={100} height={4} color="#8B5CF6" speedMultiplier={2} />
        </div>
      }
      {
        suppliers && 
        <div id="suppliers-wrapper" className="w-full grid grid-cols-4 gap-6 place-content-start py-4 overflow-auto" style={{height: 771+'px'}}>
          {
            suppliers?.data.data.map(supplier => <Card key={supplier.id} item={supplier} formAppear={handleFormAppear} />)
          }
        </div>
      }
    </div>
  );
}

export default Suppliers;