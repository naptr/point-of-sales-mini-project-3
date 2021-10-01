import React, { useEffect, useState } from 'react'; 
import { useMutation, useQuery } from 'react-query';

import DatePicker from '@app/components/DatePicker';

import { dateParserWithRegex } from '@app/utils/utils';
import { getHistoriesWithFilter } from '@app/api/dashboard_apis';

import "react-datepicker/dist/react-datepicker.css";


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
  const [filteredHistories, setFilteredHistories] = useState([]);

  /* Queries */

  const [queries, setQueries] = useState({
    fromDate: null,
    toDate: null,
    transactionNumber: '',
    cashierID: '',
    customerID: ''
  })
  /* End of Filter Data */

  /* Handlers */
  const handleQueryData = (data, name) => {
    setQueries({
      ...queries,
      [name]: data
    });
  }

  const handleSortingSubmit = async () => { // handling get data with filters
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
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => console.log(filteredHistories), [filteredHistories]);

  return (
    <div id="histories-with-filter-container-wrapper" className="flex flex-col flex-grow justify-between relative">
      <div id="histories-title" className="w-full h-10 flex justify-between items-center text-purple-500">
        <h2 className="text-xl font-semibold italic font-caption">Transaction Histories with Filter</h2>
      </div>
      <div className="h-custom-771 w-full flex flex-row">
        <div id="filters" className="">
          <input name="transactionNumber" value={queries.transactionNumber} onChange={e => handleQueryData(e.target.value, e.target.name)} className="transition-colors duration-300 bg-purple-50 w-32 h-10 px-2 border-2 border-opacity-0 focus:outline-none rounded focus:border-purple-400 focus:border-opacity-100 hover:bg-purple-100" />
          <input name="cashierID" value={queries.cashierID} onChange={e => handleQueryData(e.target.value, e.target.name)} className="transition-colors duration-300 bg-purple-50 w-16 h-10 px-2 border-2 border-opacity-0 focus:outline-none rounded focus:border-purple-400 focus:border-opacity-100 hover:bg-purple-100" />
          <input name="customerID" value={queries.customerID} onChange={e => handleQueryData(e.target.value, e.target.name)} className="transition-colors duration-300 bg-purple-50 w-16 h-10 px-2 border-2 border-opacity-0 focus:outline-none rounded focus:border-purple-400 focus:border-opacity-100 hover:bg-purple-100" />
          <DatePicker
            selected={queries.fromDate}
            onDateSelected={dayzedData => handleQueryData(dayzedData.date, 'fromDate')}
            showOutsideDays={true}
          />
          <DatePicker
            selected={queries.toDate}
            onDateSelected={dayzedData => handleQueryData(dayzedData.date, 'toDate')}
            showOutsideDays={true}
          />
        </div>
        <div id="filtered-data-table" className="">
          
        </div>
      </div>
    </div>
  );
}

export default HistoriesWithFilter;