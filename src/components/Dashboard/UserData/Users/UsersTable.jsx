import React from 'react';

import RowComponent from '@app/components/RowComponent';
import Loader from '@app/components/Loader';

import { users_table_head_data, createUsersRowData } from '@app/utils/utils';


const UsersTable = ({ bodyData, getDataLoading }) => {
  return (
    <div className="h-custom-708 flex-grow flex flex-col space-y-1">
      <div className="h-12 w-full flex flex-row space-x-8 items-center text-purple-500 bg-purple-200 font-semibold shadow-md">
        {
          users_table_head_data.map(head => (
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
            bodyData?.map((body, idx) => (
              <UsersColumnComponent body={body} key={idx} idx={idx} />
            ))
          )
        }
      </div>
    </div>
  );
}

export default UsersTable;


const UsersColumnComponent = ({ body, idx }) => {
  const rowData = createUsersRowData(body, idx);

  return (
    <div className="h-18 w-full flex flex-row space-x-8 items-center shadow rounded hover:bg-purple-50 active:bg-white transition-all duration-300">
      {
        rowData.map(row => (
          <RowComponent className={row.classes} key={row.id}>
            {row.child}
          </RowComponent>
        ))
      }
    </div >
  );
}