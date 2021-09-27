import React, { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import Notificator from '@app/components/Dashboard/Notificator';

import { editSupplier, createSupplier } from '@app/api/dashboard';


const SupplierForm = ({ closeForm, currentItem }) => {
  const queryClient = useQueryClient();
  const [supplierData, setSupplierData] = useState({
    supplier_name: '',
    address: '',
    phone_number: ''
  });

  const mutation = useMutation(data => currentItem ? editSupplier(data, currentItem.id) : createSupplier(data), {
    onSuccess: () => queryClient.invalidateQueries('suppliers')
  })

  /* Handlers */
  const handleFormSubmit = event => {
    event.preventDefault();
    const formData = new FormData;
    currentItem && formData.append('_method', 'PUT'); 
    for (const keys of Object.keys(supplierData)) {
      if (keys == 'phone_number') {
        formData.append(keys, `0${supplierData[keys]}`);
      } else {
        formData.append(keys, supplierData[keys]);
      }

    }

    mutation.mutate(formData);
  }

  const handleCloseForm = () => {
    closeForm();
  }

  // phone number handler
  const handlePhoneNumberInput = e => {
    const input = e.target.value;

    setSupplierData({
      ...supplierData,
      phone_number: input
    });
  }

  // another input handler
  const handleInputChange = e => {
    const {target: { name }} = e;
    const {target: { value }} = e

    setSupplierData({
      ...supplierData,
      [name]: value
    })
  }

  useEffect(() => {
    const [_, ...phoneNumber] = currentItem && currentItem.phone_number;
  
    currentItem && setSupplierData({
      supplier_name: currentItem.supplier_name,
      address: currentItem.address,
      phone_number: phoneNumber.join('')
    })

  }, [])

  return (
    <div id="form-wrapper" className="h-full w-full flex flex-col items-center justify-center space-y-12 relative">
      <h1 className="text-2xl font-caption text-gray-800">{currentItem ? 'Edit' : 'Create'} Supplier</h1>
      <form onSubmit={handleFormSubmit} className="flex flex-row w-2/5 shadow-md rounded p-8 space-x-4">
        <div id="labels" className="w-48 h-full flex-col flex items-start font-caption text-gray-800 font-semibold space-y-4">
          <label id="supplier-name" className="h-10 w-full">Name</label>
          <label id="phone-number" className="h-10 w-full">Phone Number</label>
          <label id="address" className="h-10 w-full">Address</label>
        </div>
        <div id="inputs" className="flex-grow h-full flex flex-col items-center justify-center space-y-4">
          <div id="inputs-wrapper" className="w-full h-full flex flex-col items-start space-y-4 font-caption text-gray-800">
            <input name="supplier_name" value={supplierData.supplier_name} className="transition-colors duration-300 bg-purple-50 h-10 px-2 border-2 border-opacity-0 w-full focus:outline-none rounded focus:border-purple-400 focus:border-opacity-100 hover:bg-purple-100" onChange={handleInputChange} />
            <div id="phone-number-input" className="h-10 bg-purple-50 pr-2 flex flex-row rounded focus-within:border-purple-400 border-2 border-opacity-0 focus-within:border-opacity-100 transition-all duration-300">
              <div className="h-full font-semibold flex items-center px-2 max-w-min text-purple-500">
                <p>+62</p>
              </div>
              <input className="bg-transparent focus:outline-none" onChange={handlePhoneNumberInput} value={supplierData.phone_number} />
            </div>
            <input name="address" value={supplierData.address} className="transition-colors duration-300 bg-purple-50 h-10 px-2 border-2 border-opacity-0 w-full focus:outline-none rounded focus:border-purple-400 focus:border-opacity-100 hover:bg-purple-100" onChange={handleInputChange} />
          </div>
          <div id="buttons">
            <div id="buttons-wrapper" className="flex flex-row items-center space-x-2 px-2">
              <button type="button" onClick={handleCloseForm} className="transition-all duration-300 rounded shadow hover:bg-red-400 hover:text-white text-red-400 w-24 h-10">
                Cancel
              </button>
              <input type='submit' value={currentItem ? 'Save' : 'Create'} className="transition-all duration-300 rounded shadow cursor-pointer bg-white hover:bg-purple-400 w-24 text-purple-400 hover:text-white h-10" />
            </div>
          </div>
        </div>
      </form>
      {
        mutation.isSuccess && <Notificator closeForm={handleCloseForm} message={`Supplier is Successfully ${currentItem ? "Updated" : "Created"}`} additional_classes="absolute top-10"  />
      }
    </div>
  );
}

export default SupplierForm;