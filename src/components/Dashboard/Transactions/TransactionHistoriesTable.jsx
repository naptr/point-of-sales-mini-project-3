import React from 'react';

import RowComponent from '@app/components/RowComponent';
import Loader from '@app/components/Loader';

import { transaction_histories_head, createTransactionRowData } from '@app/utils/utils';


const TransactionHistoriesTable = ({ bodyData, getOrderDetails, getDataLoading }) => {

  return (
    <div className="h-custom-708 flex-grow flex flex-col space-y-1">
      <div className="h-12 w-full flex flex-row items-center justify-between text-purple-500 bg-purple-200 font-semibold shadow-md">
        {
          transaction_histories_head.map(head => (
            <RowComponent className={head.classes} key={head.id}>
              {head.textContent}
            </RowComponent>
          ))
        }
      </div>
      <div className="w-full flex flex-col h-custom-656 items-center space-y-1 overflow-auto">
        {
          getDataLoading ? (
            <div className="h-full w-full flex items-center justify-center">
              <Loader type="BarLoader" width="75px" height="4px" speedMultiplier={2} color="#8B5CF6" />
            </div>
          ) : (
            bodyData?.map(body => (
              <HistoriesColumnComponent key={body.id  } body={body} getOrderDetails={getOrderDetails} >

              </HistoriesColumnComponent>
            ))
          )
        }
      </div>
    </div>
  )
}

export default TransactionHistoriesTable;

const HistoriesColumnComponent = ({ body, getOrderDetails }) => {
  const rowData = createTransactionRowData(body);

  return (
    <button className="h-18 w-full flex flex-row justify-between items-center shadow rounded hover:bg-purple-50 active:bg-white transition-all duration-300" onClick={() => getOrderDetails(body.no_transaction)}>
      {
        rowData.map(row => (
          <RowComponent className={row.classes} key={row.id}>
            {row.child}
          </RowComponent>
        ))
      }
    </button>
  );
}