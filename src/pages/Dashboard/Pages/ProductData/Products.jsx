import React, { useEffect, useState } from 'react';
import { 
  useQuery, 
  useMutation, 
  useQueryClient 
} from 'react-query';

import { 
  EditIcon, 
  DeleteIcon, 
  PreviousPageIcon, 
  NextPageIcon 
} from '@app/components/Icons';
import { Loader } from '@app/components/Loader';

import { 
  getProducts, 
  deleteProductByID, 
  postNewProduct, 
} from '@app/api/dashboard';
import { 
  products_table_heads, 
  setProductsItemList, 
  itemNumberByPage 
} from '@app/utils/utils';


const Products = () => {
  const [loading, setLoading] = useState(false);

  // Pagination and Data Consts
  const [page, setPage] = useState(1);
  const {
    data: products,
    isLoading, 
    isFetching,
    isError,
    error,
  } = useQuery(['products', page], () => getProducts(page), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  // Create Product Form Consts
  const [formAppear, setFormAppear] = useState(false);

  // data loading handler
  const dataLoadingHandler = (isLoading) => {
    setLoading(isLoading);
  }

  // Pagination Handler
  const setTotalPage = (totalItem) => {
    return Math.ceil(totalItem / 10, 0);
  }

  // Create New Product Handler
  const newProductHandler = () => {
    setFormAppear(!formAppear);
  }


  return formAppear ? (
    <h1>Appear</h1>
  ) : (
    <div className="flex flex-col flex-grow justify-between relative">
      {
        loading && 
        <div id="data-fetch-loader" className="absolute -top-10 right-2 p-1 rounded-full bg-white shadow-md flex items-center justify-center">
          <Loader type="ClipLoader" size="24px" color="#8B5CF6" />
        </div>
      }
      <div id="products-list-title" className="w-full h-10 flex justify-between items-center text-purple-500">
        <h2 className="text-xl font-semibold italic font-caption">Products List</h2>
        <button id="add-products" className="h-full hover:bg-green-100 w-28 rounded flex items-center justify-center font-caption text-sm text-green-400 transition-all duration-300" onClick={newProductHandler}>
          <p>New Product</p>
        </button>
      </div>
      <div id="content-table-wrapper" className="flex flex-col shadow-md rounded">
        <div id="table-wrapper" className="flex flex-col min-h-custom">
          <div id="table-head" className="h-12 flex flex-row items-center justify-between bg-purple-300">
            <>
              {
                products_table_heads.map(head => (
                  <TableRowComponent id={head.id} className={head.classes} key={head.id}>
                    {head.textContent}
                  </TableRowComponent>
                ))
              }
            </>
            <TableRowComponent id="actions" className="px-4 w-24 flex items-center justify-center">
              <p>Actions</p>
            </TableRowComponent>
          </div>
          <div id="table-body-wrapper" className="w-full flex flex-col h-custom-height items-center">
            {
              isLoading || isFetching ? (
                <span>Loading ...</span>
              ) : isError ? (
                <span>an error occured: { error } </span>
              ) : (
                //.map(data => console.log(data))
                  products.data.data.data.map((product, idx) => (
                    <TableColumnsComponent item={product} key={idx} idx={itemNumberByPage(products?.data.data.current_page, idx, (products?.data.data.data).length)} setLoading={dataLoadingHandler} />
                  ))
                // <></>
              )
            }
          </div>
        </div>
      </div>
      <div className="flex flex-row h-8 max-w-max font-caption text-sm bg-purple-300">
        <button className="px-2 transition-all duration-300 flex items-center justify-center hover:bg-purple-200" onClick={() => setPage(1)} disabled={products?.data.data.current_page == 1}>
          First
        </button>
        <button className="disabled:opacity-50 transition-all duration-300 w-8 flex items-center justify-center hover:bg-purple-400" onClick={() => setPage(old => old - 1)} disabled={products?.data.data.current_page == 1}>
          <PreviousPageIcon size="20" />
        </button>
        <div className="transition-all duration-300 w-8 flex items-center justify-center font-bold text-purple-500">
          <p>{page}</p>
        </div>
        <button className="disabled:opacity-50 transition-all duration-300 w-8 flex items-center justify-center hover:bg-purple-400" onClick={() => setPage(old => old + 1)} disabled={page == setTotalPage(products?.data.data.total)}>
          <NextPageIcon size="20" />
        </button>
        <button className="px-2 transition-all duration-300 flex items-center justify-center hover:bg-purple-400" onClick={() => setPage(setTotalPage(products?.data.data.total))} disabled={products?.data.data.current_page == (setTotalPage(products?.data.data.total))}>
          Last
        </button>
      </div>
    </div>
  )
}

export default Products;

// Table Components
const TableColumnsComponent = ({ item, idx, setLoading }) => {
  const bodyDatas = setProductsItemList(item, ( idx ));
  const queryClient = useQueryClient();
  const mutation = useMutation(id => deleteProductByID(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
      // console.log(data);
    }
  });

  const handleDeleteItem = () => {
    // console.log(e);
    mutation.mutate(item.id);
  }

  useEffect(() => setLoading(mutation.isLoading), [mutation.isLoading]);

  return (
    <div id="table-body-row-wrapper" className="h-18 w-full items-center relative odd:bg-purple-50">
      <div id="table-body-row" className="h-full w-full flex flex-row justify-between items-center">
        {
          bodyDatas.map((body, idx) => (
            <TableRowComponent id={body.id} className={body.classes} key={idx}>
              { body.child }
            </TableRowComponent>
          ))
        }
        <TableRowComponent id="actions" className="px-4 w-24 flex flex-row items-center justify-around">
          <div className="transition-all flex items-center justify-center h-7 w-7 duration-300 p-1 rounded hover:bg-yellow-100"> 
            <EditIcon size="20" />
          </div>
          <button className="h-7 w-7 transition-all flex items-center justify-center duration-300 p-1 rounded hover:bg-red-100" onClick={handleDeleteItem}>
            <DeleteIcon size="19" />
          </button>
        </TableRowComponent>
      </div>
      {/* {
        mutation.isLoading && 
        <div id="loader" className="h-full w-10 flex items-center justify-center absolute -top-16 right-0">
          <Loader loader="BeatLoader" size={6} color="#8B5CF6" />
        </div>
      } */}
    </div>
  );
}

const TableRowComponent = (props) => {
  const { children } = props;

  return (
    <div {...props}>
      { children }
    </div>
  );
}