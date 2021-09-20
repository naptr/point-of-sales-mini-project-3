import React, { useEffect } from 'react';
import { useQueryClient, useMutation } from 'react-query';

import { EditIcon, DeleteIcon } from '@app/components/Icons';
import { Loader } from '@app/components/Loader';      

import { setProductsItemList, itemNumberByPage } from '@app/utils/utils';
import { deleteProductByID } from '@app/api/dashboard';


export const Table = ({ tableBodyData, tableHeadData, loading, fetching, error, errorMessage, handleLoading }) => {
  return (
    <div id="content-table-wrapper" className="flex flex-col shadow-md rounded">
      <div id="table-wrapper" className="flex flex-col min-h-custom">
        <div id="table-head" className="h-12 flex flex-row items-center justify-between bg-purple-300">
          <>
            {
              tableHeadData.map(head => ( // row_data
                <RowComponent id={head.id} className={head.classes} key={head.id}>
                  {head.textContent}
                </RowComponent>
              ))
            }
          </>
          <RowComponent id="actions" className="px-4 w-24 flex items-center justify-center">
            <p>Actions</p>
          </RowComponent>
        </div>
        <div id="table-body-wrapper" className="w-full flex flex-col h-custom-height items-center">
          {
            loading || fetching ? ( // loading | fetching
              <div id="error-component" className="h-full w-full flex items-center justify-center">
                <Loader type="BarLoader" speedMultiplier={2} width={100} height={4} color="#8B5CF6" />
              </div>
            ) : error ? ( // error
              <span>an error occured: { errorMessage } </span>
            ) : (
              tableBodyData.data.map((product, idx) => ( // column_data
                <ColumnComponent item={product} key={idx} idx={itemNumberByPage(tableBodyData.current_page, idx, (tableBodyData.data).length)} setLoading={handleLoading} />
              ))
            )
          }
        </div>
      </div>
    </div>
  );
}

// Table Components
export const RowComponent = props => {
  const { children } = props;

  return (
    <div {...props}>
      { children }
    </div>
  );
}

export const ColumnComponent = ({ item, idx, setLoading }) => {
  const bodyDatas = setProductsItemList(item, idx);
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

  useEffect(() => setLoading(mutation.isLoading), [ mutation.isLoading ]);

  return (
    <div id="table-body-row-wrapper" className="h-18 w-full items-center relative odd:bg-purple-50">
      <div id="table-body-row" className="h-full w-full flex flex-row justify-between items-center">
        {
          bodyDatas.map((body, idx) => (
            <RowComponent id={body.id} className={body.classes} key={idx}>
              {body.child}
            </RowComponent>
          ))
        }
        <RowComponent id="actions" className="px-4 w-24 flex flex-row items-center justify-around">
          <div className="transition-all flex items-center justify-center h-7 w-7 duration-300 p-1 rounded hover:bg-yellow-100">
            <EditIcon size="20" />
          </div>
          <button className="h-7 w-7 transition-all flex items-center justify-center duration-300 p-1 rounded hover:bg-red-100" onClick={handleDeleteItem}>
            <DeleteIcon size="19" />
          </button>
        </RowComponent>
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