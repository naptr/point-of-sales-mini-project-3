import React, { useEffect } from 'react';
import { useQueryClient, useMutation } from 'react-query';

import { EditIcon, DeleteIcon } from '@app/components/Icons';
import Loader from '@app/components/Loader';
import RowComponent from '@app/components/RowComponent';      

import { setProductsItemList, itemNumberByPage } from '@app/utils/utils';
import { deleteProductByID } from '@app/api/dashboard_apis';
import { products_table_heads } from '@app/utils/utils';


const ProductTable = ({ tableBodyData, loading, fetching, error, errorMessage, handleLoading, editMode, handleFormAppear }) => {

  return (
    <div id="table-wrapper" className="flex flex-col min-h-custom space-y-1">
      <div id="table-head" className="h-12 flex flex-row items-center justify-between text-purple-500 bg-purple-200 font-semibold shadow-md">
        <>
          {
            products_table_heads.map(head => ( // row_data
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
      <div id="table-body-wrapper" className="w-full flex flex-col h-custom-656 items-center space-y-1">
        {
          loading || fetching ? ( // loading | fetching
            <div id="error-component" className="h-full w-full flex items-center justify-center">
              <Loader type="BarLoader" speedMultiplier={2} width={100} height={4} color="#8B5CF6" />
            </div>
          ) : error ? ( // error
            <span>an error occured: { errorMessage } </span>
          ) : (
            tableBodyData?.data.map((product, idx) => ( // column_data
              <ColumnComponent item={product} key={idx} idx={itemNumberByPage(tableBodyData?.current_page, idx, (tableBodyData?.data).length)} setLoading={handleLoading} editItem={editMode} handleFormAppear={handleFormAppear} />
            ))
          )
        }
      </div>
    </div>
  );
}

export default ProductTable;

// Table Components

const ColumnComponent = ({ item, idx, setLoading, editItem, handleFormAppear }) => {
  const bodyDatas = setProductsItemList(item, idx);
  const queryClient = useQueryClient();
  const mutation = useMutation(id => deleteProductByID(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
      queryClient.invalidateQueries('categories');
    }
  });

  const handleEditItem = () => {
    editItem({
      mode: true,
      item_id: item.id
    });
    handleFormAppear();
  }

  const handleDeleteItem = () => {
    mutation.mutate(item.id);
  }

  useEffect(() => setLoading(mutation.isLoading), [ mutation.isLoading ]);

  return (
    <div id="table-body-row" className="h-18 w-full flex flex-row justify-between items-center shadow rounded">
      {
        bodyDatas.map((body, idx) => (
          <RowComponent id={body.id} className={body.classes} key={idx}>
            {body.child}
          </RowComponent>
        ))
      }
      <RowComponent id="actions" className="px-4 w-24 flex flex-row items-center justify-around">
        <button className="transition-all flex items-center justify-center h-7 w-7 duration-300 p-1 rounded hover:bg-yellow-100" onClick={handleEditItem}>
          <EditIcon size="20" />
        </button>
        <button className="h-7 w-7 transition-all flex items-center justify-center duration-300 p-1 rounded hover:bg-red-100" onClick={handleDeleteItem}>
          <DeleteIcon size="19" />
        </button>
      </RowComponent>
    </div>
  );
}