 import React, { useEffect, useState, useRef } from 'react';
import {  useQueryClient, useMutation, useQuery } from 'react-query';

import Notificator from '@app/components/Dashboard/Notificator';

import {
  getProductDetailsByID, 
  createProduct, 
  editProductDetails,
} from '@app/api/dashboard';
import { dashboard } from '@app/api/apis';
import { getMultipleRequest } from '@app/api/dashboard';


const ProductForm = ({ editMode, createMode, closeForm }) => {
  /* States */
  const [ productDetailsLoading, setProductDetailsLoading ] = useState(true);
  const [ productDetails, setProductDetails ] = useState({
    product_code: '',
    image: '',
    product_name: '',
    stock: '',
    price: '',
    category: {
      id: '',
      name: ''
    },
    supplier: {
      id: '',
      name: ''
    }
  });
  const [ categoryDropdown, setCategoryDropdown ] = useState(false);
  const [ supplierDropdown, setSupplierDropdown ] = useState(false);

  /* Refs */
  const categoryDropdownRef = useRef(null);
  const supplierDropdownRef = useRef(null);
  
  /* Queries */
  const queryClient = useQueryClient();
  const mutation = useMutation(data => handleDataSending(data), {
    onSuccess: () => queryClient.invalidateQueries('products')
  });
  const {
    data: result,
  } = useQuery('multipleRequestQueries', () => getMultipleRequest([dashboard.get('/suppliers'), dashboard.get('/categories')]), {
    refetchOnWindowFocus: false
  })
  /* End of Queries */

  /* Functions */

  // Request function
  const getCurrentProductDetails = async () => {
    setProductDetailsLoading(true);

    try {
      const { data } = await getProductDetailsByID(editMode.item_id);
      
      setProductDetails({
        product_code: data.data.product_code,
        product_name: data.data.product_name,
        image: {
          media: data.data.image,
          name: '',
        },
        stock: data.data.stock,
        price: data.data.price,
        category: {
          id: data.data.category.id,
          name: data.data.category.category_name,
        } ,
        supplier: {
          id: '',
          name: data.data.supplier_name
        }
      })

      data && setProductDetailsLoading(false);
    } catch (error) {
      return error;
    }
  }  
  
  const parseToURL = object => {
    return URL.createObjectURL(object);
  }

  /* Handler */
  // form submit handler
  const handleSumbitProduct = (e) => {
    e.preventDefault();

    const formData = new FormData;
    if (editMode.mode) {
      formData.append('_method', 'PUT')
    }
    for (const single_data of Object.keys(productDetails)) {
      if (single_data == 'category') {
        formData.append(`${single_data}_id`, productDetails[single_data].id)
      } else if (single_data == 'image') {
        formData.append(single_data, productDetails[single_data].media)
      } else if (single_data == 'supplier') { 
        formData.append(`${single_data}_name`, productDetails[single_data].name)
      } else {
        formData.append(single_data, productDetails[single_data]);
      }
    }

    mutation.mutate(formData);
  }

  // handle data sending
  const handleDataSending = async data => {

    if (editMode.mode) {
      try {
        const response = await editProductDetails(data, editMode.item_id);

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else if (createMode) {
      try {
        const response = await createProduct(data);
        
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  }

  // close Form Handler
  const closeFormHandler = () => {
    const [closeCreateMode, closeEditMode] = closeForm();
    
    if (editMode.mode) {
      closeEditMode();
    } else if (createMode) {
      closeCreateMode();
    }
  }

  // input image handler
  const handleImageInput = (ev) => {
    console.log(ev.target.files);
    if (ev.target.files && ev.target.files[0]) {
      setProductDetails({
        ...productDetails,
        image: {
          media: ev.target.files[0],
          // name: ev.target.files[0].name,
        }
      });
    }
  }

  // text input handler
  const handleInputChange = ev => {
    const field = ev.target.name;

    setProductDetails({
      ...productDetails,
      [field]: ev.target.value
    })
    // console.log(field, ev.target.value);
  }

  // dropdown handler
  const handleDropdown = (ref) => {
    const { current } = ref;
    switch (current.getAttribute('name')) {
      case 'category':
        setCategoryDropdown(!categoryDropdown);
        break;
      case 'supplier':
        setSupplierDropdown(!supplierDropdown);
        break;
    }

    console.log(current);
  }

  // dropdown value selection handler
  const handleDropdownValueSelection = (id, name, selector) => {
    return [
      setProductDetails({
        ...productDetails,
        [selector]: {
          id: id,
          name: name
        }
      })
    ]
  }

  /* End of Functions */

  /* Listening for keydown event */
  const keydownListener = (event) => {
    if (event.key == 'Escape' || event.keyCode == 27) {
      closeFormHandler();
    }
  }

  window.addEventListener('keydown', keydownListener);
  /* End of Event Listener */

  /* React lifecycles */
  // on both mode
  // useEffect(() => result && console.log(result), [result]); // debug

  // on edit mode
  useEffect(() => editMode.mode && getCurrentProductDetails(), []);
  useEffect(() => !editMode.mode && setProductDetailsLoading(false), []);
  useEffect(() => editMode.mode && console.log(productDetails), [productDetails]); // debug

  // on create mode
  // useEffect(() => console.log(productDetails), [productDetails]); // debug

  return (
    <div id="form-wrapper" className="h-full w-full flex items-center justify-center space-y-8 flex-col ">
      {
        mutation.isSuccess && <Notificator closeForm={closeFormHandler} message={`Your Product is Successfully ${editMode.mode ? "Updated" : "Created" }`} />
      }
      {
        productDetailsLoading ? (
          <h1 className="text-xl text-purple-400 font-semibold font-caption">Trying to get current Product Data</h1>
        ) : (
          <>
            <h1 className="text-2xl font-caption text-gray-800">{ editMode.mode ? 'Edit' : createMode ? 'Create' : 'null' } Product</h1>
            <form onSubmit={handleSumbitProduct} className="w-2/5 shadow-md rounded flex flex-row p-8 space-x-4">
              <div id="left-form" className="h-full w-64 flex items-start flex-col space-y-2">
                {/* <img src={productDetails.image} className="w-full h-64 object-cover appearance-none" /> */}
                <div id="image-wrapper" className="h-64 w-full flex items-center shadow-md">
                  <picture className="h-full w-full">
                      <img src={typeof productDetails.image.media === 'string' ? productDetails.image.media : (productDetails.image.media ? parseToURL(productDetails.image.media) : '/default_user.png')} className="h-full w-full object-cover" />
                  </picture>
                </div>
                <div id="file-input-button" className="transition-all h-10 w-full relative shadow-md rounded flex cursor-pointer items-center justify-center hover:transition-colors duration-300 bg-white hover:bg-purple-50 active:bg-white">
                  <label htmlFor  ="file" className="z-10 font-caption tracking-wider text-gray-600 text-sm font-semibold cursor-pointer">Select File</label>
                  <input id="file" type="file" accept="image/jpeg, .jpeg, .jpg, image/png, .png" onChange={handleImageInput} className="w-full opacity-0 absolute z-0 cursor-pointer h-full" />
                </div>
                <p className="font-semibold font-body text-gray-800 text-sm">
                  Hanya dapat menerima file dengan ekstensi .jpeg, .jpg, dan .png.
                </p>
              </div>
              <div id="right-form" className="h-full flex-grow flex flex-col items-center space-y-16">
                <div id="input-forms" className="w-full flex flex-row">
                  <div id="input-label" className="h-full w-1/3 flex flex-col space-y-8 font-caption font-semibold text-gray-800">
                    <label className="h-10 flex items-center" >Product Code</label>
                    <label className="h-10 flex items-center" >Product Name</label>
                    <label className="h-10 flex items-center" >Price</label>
                    <label className="h-10 flex items-center" >Stock</label>
                    <label className="h-10 flex items-center" >Category</label>
                    <label className="h-10 flex items-center" >Supplier</label>
                  </div>
                  <div id="inputs" className="h-full flex-grow flex flex-col space-y-8 font-caption">
                    <input name="product_code" value={productDetails.product_code} className="transition-colors duration-300 bg-purple-50 w-16 h-10 px-2 border-2 border-opacity-0 focus:outline-none rounded focus:border-purple-400 focus:border-opacity-100 hover:bg-purple-100" onChange={handleInputChange} />
                    <input name="product_name" value={productDetails.product_name} className="transition-colors duration-300 bg-purple-50 h-10 px-2 border-2 border-opacity-0 focus:outline-none rounded focus:border-purple-400 focus:border-opacity-100 hover:bg-purple-100" onChange={handleInputChange} />
                    <input name="price" value={productDetails.price} className="transition-colors duration-300 bg-purple-50 w-32 h-10 px-2 border-2 border-opacity-0 focus:outline-none rounded focus:border-purple-400 focus:border-opacity-100 hover:bg-purple-100" onChange={handleInputChange} />
                    <input name="stock" value={productDetails.stock} className="transition-colors duration-300 bg-purple-50 w-16 h-10 px-2 border-2 border-opacity-0 focus:outline-none rounded focus:border-purple-400 focus:border-opacity-100 hover:bg-purple-100" onChange={handleInputChange} />
                    <div className="h-10 w-full relative flex items-center rounded" >
                      <div onClick={() => { handleDropdown(categoryDropdownRef)}} ref={categoryDropdownRef} name="category" className="h-full w-full flex items-center bg-purple-50 transition-all duration-300  hover:bg-purple-100 px-2 cursor-pointer active:bg-purple-50">
                        <p>{ productDetails?.category.name }</p>
                      </div>
                      {
                        categoryDropdown && <LocalDropdown items={result[ 1 ].data.data} setDropdownValue={handleDropdownValueSelection} dropdownFor={categoryDropdownRef.current.getAttribute('name')} closeDropdown={() => handleDropdown(categoryDropdownRef)} />
                      }
                    </div>
                    <div className="h-10 w-full relative flex items-center rounded" >
                      <div onClick={() => handleDropdown(supplierDropdownRef)} ref={supplierDropdownRef} name="supplier" className="h-full w-full flex items-center bg-purple-50 transition-all duration-300  hover:bg-purple-100 px-2 cursor-pointer active:bg-purple-50">
                        <p>{productDetails?.supplier.name}</p>
                      </div>
                      {
                        supplierDropdown && <LocalDropdown items={result[ 0 ].data.data} setDropdownValue={handleDropdownValueSelection} dropdownFor={supplierDropdownRef.current.getAttribute('name')} closeDropdown={() => handleDropdown(supplierDropdownRef)} />
                      }
                    </div>
                  </div>
                </div>
                <div id="buttons" className="flex flex-row items-center h-10 w-full justify-center space-x-4 font-body">
                  <button type="button" onClick={closeFormHandler} className="transition-all duration-300 h-full rounded shadow hover:bg-red-400 hover:text-white text-red-400 w-36">
                    Cancel
                  </button>
                  <input type="submit" className="transition-all duration-300 h-full rounded shadow cursor-pointer bg-white hover:bg-purple-400 w-36 text-purple-400 hover:text-white" value="Save" />
                </div>
              </div>
            </form>
          </>
        )
      }
    </div>
  );
}

export default ProductForm;

const LocalDropdown = ({ items, setDropdownValue, dropdownFor, closeDropdown }) => {

  const handleValueSelection = (item) => {
    setDropdownValue(item.id, item[`${dropdownFor}_name`], dropdownFor);
    closeDropdown();
    // console.log(item);
  }

  return (
    <div id="dropdown" className="max-h-50 w-full flex flex-col overflow-auto absolute left-0 top-0 shadow-md transform translate-y-10 z-50">
      {
        items.map(item => (
          <div onClick={() => handleValueSelection(item)} key={item.id} id="item" className="cursor-pointer font-caption text-gray-800 py-2 h-10 w-full flex items-center px-2 bg-purple-50 hover:bg-purple-100 active:bg-purple-50 transition-colors duration-300">
            <p>{ Object.values(item)[1] }</p>
          </div>
        ))
      }
    </div>
  );
}