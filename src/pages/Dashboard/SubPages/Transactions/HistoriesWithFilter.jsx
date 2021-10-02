import React, { useEffect, useRef, useState } from 'react'; 
import { useMutation, useQuery } from 'react-query';

import DatePicker from '@app/components/DatePicker';
import { DatePickerIcon } from '@app/components/Icons';
import TransactionHistoriesTable from '../../../../components/Dashboard/Transactions/TransactionHistoriesTable';

import { createTotal } from '@app/utils/utils';
import { getHistoriesWithFilter, getOrderHistoryDetails } from '@app/api/dashboard_apis';

import "react-datepicker/dist/react-datepicker.css";


// Custom functions
const formatDateToServerAcceptable = date => {
  const splittedDates = date.toLocaleString().split(',')[0].split('/')
  const finalDate = [];

  for (const item of splittedDates) {
    if (splittedDates.indexOf(item) == (splittedDates.length - 1)) {
      finalDate.splice(0, 0, item);
    } else if (splittedDates.indexOf(item) == (splittedDates.length - 2)){
      if (item.length == 1) {
        finalDate.splice(1, 0, `0${item}`);
      } else {
        finalDate.splice(1, 0, item);
      }
    } else {
      if (item.length == 1) {
        finalDate.splice(1, 0, `0${item}`);
      } else {
        finalDate.splice(1, 0, item);
      }
    }
  }

  return finalDate.join('-');
}

const HistoriesWithFilter = () => {
  const fromDateButtonRef = useRef(null);
  const toDateButtonRef = useRef(null);

  const [filteredHistories, setFilteredHistories] = useState([]);
  const [filteredHistoriesLoading, setFilteredHistoriesLoading] = useState(false);
  const [currentTransactionDetails, setCurrentTransactionDetails] = useState([]);
  const [transactionDetailsLoading, setTransactionDetailsLoading] = useState(false);
  const [datePickerAppear, setDatePickerAppear] = useState({
    fromDate: false,
    toDate: false
  });

  /* Queries */
  const [queries, setQueries] = useState({
    fromDate: null,
    toDate: null,
    transactionNumber: '',
    cashierID: '',
    customerID: ''
  })
  /* End of Queries */

  /* Handlers */
  const handleQueryData = (data, name) => {
    setQueries({
      ...queries,
      [name]: data
    });

    if (typeof name == 'string' && (name === 'fromDate' || name === 'toDate')) {
      setDatePickerAppear({
        [name]: !datePickerAppear[name]
      })
    }
  }

  const handleSortingSubmit = async () => { // handling get data with filters
    setFilteredHistoriesLoading(true);
    const queryParams = [];

    if (queries.fromDate && queries.toDate) {
      queryParams.push(`date_from=${formatDateToServerAcceptable(queries.fromDate)}`);
      queryParams.push(`date_to=${formatDateToServerAcceptable(queries.toDate)}`);
    } 

    queries.transactionNumber && queryParams.push(`no_transaction=${queries.transactionNumber}`);
    queries.cashierID && queryParams.push(`kasir_id=${queries.cashierID}`);
    queries.customerID && queryParams.push(`customer_id=${queries.customerID}`);

    try {
      const result = await getHistoriesWithFilter(queryParams.join('&'));

      setFilteredHistories(result.data.data);
      setFilteredHistoriesLoading(false);
    } catch (error) {
      console.error('Error bray')
      setFilteredHistoriesLoading(false);
    }
  }

  const handleOrderDetails = async transaction_number => {
    setTransactionDetailsLoading(true);
    try {
      const details = await getOrderHistoryDetails(transaction_number);

      setCurrentTransactionDetails(details.data.data);
      setTransactionDetailsLoading(false);
    } catch (error) {
      console.error(error);
      setTransactionDetailsLoading(false);
    }
  }

  const handleDatePickerAppear = e => {
    const name = e.currentTarget.getAttribute('name');

    setDatePickerAppear({
      ...datePickerAppear,
      [name]: !datePickerAppear[name]
    })
  }
  /* End of Handlers */

  return (
    <div id="histories-with-filter-container-wrapper" className="flex flex-col flex-grow relative">
      <div id="histories-title" className="w-full h-10 flex justify-between items-center text-purple-500">
        <h2 className="text-xl font-semibold italic font-caption">Transaction Histories with Filter</h2>
      </div>
      <div className="h-custom-771 w-full flex flex-col space-y-2">
        <div id="filters-wrapper" className="max-w-max max-h-12 flex flex-row space-x-4 items-center justify-start">
          <div id="filters" className="w-full h-full flex flex-row items-start space-x-8">
            <div id="non-date-filters" className="h-12 flex items-center space-x-8 flex-row">
              <div id="transaction-filter" className="h-full flex flex-row items-start space-x-4">
                <label className="text-sm font-semibold">Transaction Number</label>
                <input name="transactionNumber" value={queries.transactionNumber} onChange={e => handleQueryData(e.target.value, e.target.name)} className="transition-colors duration-300 bg-purple-50 w-32 h-10 px-2 border-2 border-opacity-0 focus:outline-none rounded focus:border-purple-400 focus:border-opacity-100 hover:bg-purple-100" />
              </div>
              <div id="cashier-filter" className="h-full flex flex-row items-start space-x-4">
                <label className="text-sm font-semibold">Cashier ID</label>
                <input name="cashierID" value={queries.cashierID} onChange={e => handleQueryData(e.target.value, e.target.name)} className="transition-colors duration-300 bg-purple-50 w-16 h-10 px-2 border-2 border-opacity-0 focus:outline-none rounded focus:border-purple-400 focus:border-opacity-100 hover:bg-purple-100" />
              </div>
              <div id="customer-filter" className="h-full flex flex-row items-start space-x-4">
                <label className="text-sm font-semibold">Customer ID</label>
                <input name="customerID" value={queries.customerID} onChange={e => handleQueryData(e.target.value, e.target.name)} className="transition-colors duration-300 bg-purple-50 w-16 h-10 px-2 border-2 border-opacity-0 focus:outline-none rounded focus:border-purple-400 focus:border-opacity-100 hover:bg-purple-100" />
              </div>
            </div>
            <div id="date-filters" className="h-12 flex flex-row items-center space-x-16">
              <div id="from-date-previewer" className="h-full flex flex-row items-start space-x-4">
                <span className="text-sm font-semibold">From</span>
                <div id="previewer-box" className="h-10 flex flex-row items-center relative">
                  <button name="fromDate" className="h-full w-10 rounded hover:bg-purple-100 bg-white active:bg-white flex items-center justify-center transition-colors duration-300" onClick={handleDatePickerAppear}>
                    <DatePickerIcon size="20px" color="#8B5CF6" />
                  </button>
                  <div name="fromDate" id="previewer" className="h-full w-48 bg-purple-50 rounded flex items-center justify-center hover:bg-purple-100 cursor-pointer transition-colors duration-300" onClick={handleDatePickerAppear}>
                    {queries.fromDate?.toLocaleString('id-ID').split(' ')[0]}
                  </div>
                  {
                    datePickerAppear.fromDate && 
                    <DatePicker
                      selected={queries.fromDate}
                      onDateSelected={dayzedData => handleQueryData(dayzedData.date, 'fromDate')}
                      showOutsideDays={true}
                    />
                  }
                </div>
              </div>
              <div id="to-date-previewer" className="h-full flex flex-row items-start space-x-4">
                <span className="text-sm font-semibold">To</span>
                <div id="previewer-box" className="h-10 flex flex-row items-center relative">
                  <button name="toDate" className="h-full w-10 rounded hover:bg-purple-100 bg-white active:bg-white flex items-center justify-center transition-colors duration-300" onClick={handleDatePickerAppear}>
                    <DatePickerIcon size="20px" color="#8B5CF6" />
                  </button>
                  <div name="toDate" id="previewer" className="h-full w-48 bg-purple-50 rounded flex items-center justify-center hover:bg-purple-100 cursor-pointer transition-colors duration-300" onClick={handleDatePickerAppear}>
                    {queries.toDate?.toLocaleString('id-ID').split(' ')[ 0 ]}
                  </div>
                  {
                    datePickerAppear.toDate && 
                    <DatePicker
                      selected={queries.toDate}
                      onDateSelected={dayzedData => handleQueryData(dayzedData.date, 'toDate')}
                      showOutsideDays={true}
                    />
                  }
                </div>
              </div>
            </div>
          </div>
          <button id="search-button" className="transition-all duration-300 h-12 rounded shadow cursor-pointer bg-white hover:bg-purple-400 w-36 text-purple-400 hover:text-white" onClick={handleSortingSubmit}>
            Search
          </button>
        </div>
        <div className="w-full flex flex-row space-x-6">
          <TransactionHistoriesTable bodyData={filteredHistories} getOrderDetails={handleOrderDetails} getDataLoading={filteredHistoriesLoading} />
          <div id="transaction-details" className="w-1/3 h-custom-708 flex flex-col shadow-md ">
            <div className="w-full h-12 flex items-center justify-center text-purple-500 bg-purple-200 font-semibold shadow-md">
              <p>Order Details</p>
            </div>
            <div className="h-custom-656 flex flex-col w-full p-4">
              <div id="order-struct" className="h-custom-608 w-full flex-col flex">
                <div id="struct-head" className="h-12 w-full flex flex-row space-x-2 text-sm text-gray-400 font-semibold">
                  <div id="product-name" className="h-full w-72 flex items-center justify-start">
                    <p>Product Name</p>
                  </div>
                  <div id="product-qty" className="h-full w-12 flex items-center justify-start">
                    <p>Qty</p>
                  </div>
                  <div id="product-subtotal" className="h-full flex-grow flex items-center justify-end">
                    <p>Subtotal</p>
                  </div>
                </div>
                <div id="struct-body" className="w-full h-custom-560 overflow-auto flex flex-col">
                  {
                    transactionDetailsLoading ? (
                      <div className="h-full w-full flex items-center justify-center text-purple-500 font-semibold">
                        <p>Fetching Order Details ...</p>
                      </div>
                    ) : (
                      currentTransactionDetails?.map(detail => (
                        <div className="h-12 w-full flex flex-row space-x-2">
                          <div id="product-name" className="h-full w-72 flex items-center justify-start">
                            <p>{detail.product_name}</p>
                          </div>
                          <div id="product-qty" className="h-full flex-grow flex items-center justify-start">
                            <p>{detail.qty} x Rp{Intl.NumberFormat('id-ID').format(detail.subtotal / detail.qty)},00</p>
                          </div>
                          <div id="product-subtotal" className="h-full w-36 flex items-center justify-end">
                            <p>{`Rp${Intl.NumberFormat('id-ID').format(detail.subtotal)},00`}</p>
                          </div>
                        </div>
                      ))
                    )
                  }
                </div>
                <div id="order-summary" className="h-12 w-full flex flex-row items-center justify-between">
                  <p className="text-gray-400 font-semibold">Total </p>
                  <p>
                    {
                      transactionDetailsLoading ? <p className="text-purple-500 font-semibold">Loading...</p> : currentTransactionDetails ? `Rp${Intl.NumberFormat('id-ID').format(createTotal(currentTransactionDetails))},00` : ''
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoriesWithFilter;