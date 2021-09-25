import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { getSuppliers } from '@app/api/dashboard';

const Suppliers = () => {
  const [formAppear, setFormAppear] = useState(false);

  const {
    data: suppliers,
    isLoading,
    isSuccess,
    error
  } = useQuery('suppliers', getSuppliers, {
    refetchOnWindowFocus: false
  });

  /* Handlers */
  const handleSupplierForm = () => {
    setFormAppear(true);
  }

  return formAppear ? (
    <div><h1>Form Appear</h1></div>
  ) : (
    <div id="suppliers-container-wrapper" className="flex flex-col flex-grow justify-between relative">
      <div id="suppliers-list-title" className="w-full h-10 flex justify-between items-center text-purple-500">
        <h2 className="text-xl font-semibold italic font-caption">Suppliers List</h2>
        <button id="add-suppliers" className="h-full hover:bg-green-100 w-28 rounded flex items-center justify-center font-caption text-sm text-green-400 transition-all duration-300" onClick={handleSupplierForm}>
          <p>New Suppliers</p>
        </button>
      </div>
      <div id="suppliers-wrapper" className="min-h-custom w-full grid grid-cols-5 gap-4 place-content-start">
        {
          isLoading && <h1>Loading...</h1>
        }
        {
          suppliers?.data.data.map(supplier => <p>{supplier.supplier_name}, {supplier.address}</p>)
        }
      </div>
    </div>
  );
}

export default Suppliers;

const SupplierCard = () => {
  return (
    <></>
  );
}