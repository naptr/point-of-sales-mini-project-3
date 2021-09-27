import React, { useEffect, useState } from 'react';
// import { useConditionalQuery } from '@app/utils/custom-hooks/useConditionalQuery';


const SupplierForm = ({ closeForm, currentItemID }) => {
  // const conditionalQuery = useConditionalQuery('supplier_detail', () => );
  const [supplierData, setSupplierData] = useState({
    supplier_name: '',
    address: '',
    no_telp: ''
  })

  /* Handlers */
  const handleFormSubmit = event => {
    event.preventDefault();
    console.log('test')
  }

  const handleCloseForm = () => {
    closeForm();
  }

  // phone number handler
  const handlePhoneNumberInput = e => {
    const input = e.target.value;

    setSupplierData({
      ...supplierData,
      no_telp: input
    });
  }

  // another input handler
  const handleInputChange = e => {
    const {target: { name }} = e;
    const {target: { value }} = e

    setSupplierData({
      ...supplierData,
      [field]: value
    })
  }

  useEffect(() => console.log(supplierData), [supplierData]);

  return (
    <div id="form-wrapper" className="h-full w-full flex flex-col items-center justify-center space-y-12 relative">
      <h1 className="text-2xl font-caption text-gray-800">{currentItemID ? 'Edit' : 'Create'} Supplier</h1>
      <form onSubmit={handleFormSubmit} className="flex flex-row w-2/5 shadow-md rounded p-8 space-x-4">
        <div id="labels" className="w-48 h-full flex-col flex items-start font-caption text-gray-800 font-semibold space-y-4">
          <label id="supplier-name" className="h-10 w-full">Name</label>
          <label id="phone-number" className="h-10 w-full">Phone Number</label>
          <label id="address" className="h-10 w-full">Address</label>
        </div>
        <div id="inputs" className="flex-grow h-full">
          <div id="inputs-wrapper" className="w-full h-full flex flex-col items-start space-y-4 font-caption text-gray-800">
            <input name="supplier_name" className="transition-colors duration-300 bg-purple-50 h-10 px-2 border-2 border-opacity-0 w-full focus:outline-none rounded focus:border-purple-400 focus:border-opacity-100 hover:bg-purple-100" onChange={handleInputChange} />
            <div id="phone-number-input" className="h-10 bg-purple-50 pr-2 flex flex-row rounded focus-within:border-purple-400 border-2 border-opacity-0 focus-within:border-opacity-100 transition-all duration-300">
              <div className="h-full font-semibold flex items-center px-2 max-w-min text-purple-500">
                <p>+62</p>
              </div>
              <input className="bg-transparent focus:outline-none" onChange={handlePhoneNumberInput} value={supplierData.no_telp} />
            </div>
            <input name="address" className="transition-colors duration-300 bg-purple-50 h-10 px-2 border-2 border-opacity-0 w-full focus:outline-none rounded focus:border-purple-400 focus:border-opacity-100 hover:bg-purple-100" onChange={handleInputChange} />
          </div>
          <div id="buttons">
            <button id="cancel" type="button" onClick={handleCloseForm}>Cancel</button>
            <input type="submit" value="Save" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SupplierForm;