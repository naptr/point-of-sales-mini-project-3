import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { getOrderHistories } from '../../../../api/dashboard';


const AllHistories = () => {
  const {
    data: all_histories,
    isLoading, 
    isError,
    error
  } = useQuery('all_histories', getOrderHistories);

  useEffect(() => console.log(all_histories), [all_histories]);

  return (
    <div id="all-histories-container-wrapper" className="flex flex-col flex-grow justify-between relative">
      <div id="histories-title" className="w-full h-10 flex justify-between items-center text-purple-500">
        <h2 className="text-xl font-semibold italic font-caption">Transaction Histories</h2>
      </div>
    </div>
  );
}

export default AllHistories;