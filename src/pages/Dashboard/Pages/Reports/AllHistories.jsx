import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import ReportsTable from '@app/components/Dashboard/Reports/ReportsTable';

import { getOrderHistories, getOrderHistoryDetails } from '@app/api/dashboard_apis';


const AllHistories = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [orderDetailsLoading, setOrderDetailsLoading] = useState(false);

  const {
    data: all_histories,
    isLoading,
  } = useQuery('all_histories', getOrderHistories);

  /* Handlers */
  const handleOrderDetails = async transaction_number => {
    setOrderDetailsLoading(true);
    try {
      const details = await getOrderHistoryDetails(transaction_number);

      setOrderDetails(details.data.data);
      setOrderDetailsLoading(false);
    } catch (error) {
      console.log(error);
      setOrderDetailsLoading(false);
    }
  }
  /* End of Handlers */

  /* Custom Functions */
  const createTotal = details => {
    let total = 0;

    details.forEach(detail => total += detail.subtotal);

    return total;
  }
  /* End of Custom Functions */

  useEffect(() => console.log(orderDetails), [orderDetails]);

  return (
    <div id="all-histories-container-wrapper" className="flex flex-col flex-grow justify-between relative">
      <div id="histories-title" className="w-full h-10 flex justify-between items-center text-purple-500">
        <h2 className="text-xl font-semibold italic font-caption">Transaction Histories</h2>
      </div>
      <div className="w-full flex flex-row space-x-6">
        <ReportsTable bodyData={all_histories?.data.data} getOrderDetails={handleOrderDetails} getDataLoading={isLoading} />
        <div id="transaction-details" className="w-1/4 h-custom-708 flex flex-col shadow-md ">
          <div className="w-full h-12 flex items-center justify-center text-purple-500 bg-purple-200 font-semibold shadow-md">
            <p>Order Details</p>
          </div>
          <div className="h-custom-656 flex flex-col w-full p-4">
            <div id="order-struct" className="h-custom-608 w-full flex-col flex">
              <div id="struct-head" className="h-12 w-full flex flex-row space-x-2 text-sm text-gray-400 font-semibold">
                <div id="product-name" className="h-full w-64 flex items-center justify-start">
                  <p>Product Name</p>
                </div>
                <div id="product-qty" className="h-full w-12 flex items-center justify-start">
                  <p>Qty</p>
                </div>
                <div id="product-subtotal" className="h-full w-36 flex items-center justify-end">
                  <p>Subtotal</p>
                </div>
              </div>
              <div id="struct-body" className="w-full h-custom-560 overflow-auto flex flex-col">
                { 
                  orderDetailsLoading ? (
                    <div className="h-full w-full flex items-center justify-center text-purple-500 font-semibold">
                      <p>Fetching Order Details ...</p>
                    </div>
                  ) : (
                    orderDetails?.map(detail => (
                      <div className="h-12 w-full flex flex-row space-x-2">
                        <div id="product-name" className="h-full w-64 flex items-center justify-start">
                          <p>{detail.product_name}</p>
                        </div>
                        <div id="product-qty" className="h-full w-12 flex items-center justify-start">
                          <p>x{detail.qty}</p>
                        </div>
                        <div id="product-subtotal" className="h-full w-36 flex items-center justify-end">
                          <p>{`Rp${Intl.NumberFormat('id-ID').format(detail.subtotal)},00`}</p>
                        </div>
                      </div>
                    ))
                  )
                }
              </div>
            </div>
            <div id="order-summary" className="h-12 w-full flex flex-row items-center justify-between">
              <p className="text-gray-400 font-semibold">Total </p>
              <p>
                {
                  orderDetails && `Rp${Intl.NumberFormat('id-ID').format(createTotal(orderDetails))},00`
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllHistories;