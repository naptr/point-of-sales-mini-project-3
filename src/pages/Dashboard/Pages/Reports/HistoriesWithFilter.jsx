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
    transactionNumber: null,
    cashierID: null,
    customerID: null
  })
  /* End of Filter Data */

  /* Handlers */
  const handleQueryData = (data, name) => {
    setQueries({
      ...queries,
      [name]: data
    });
  }

  const handleSortingSubmit = async () => {
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

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="histories-with-filter-container-wrapper" className="flex flex-col flex-grow justify-between relative">
      <div id="histories-title" className="w-full h-10 flex justify-between items-center text-purple-500">
        <h2 className="text-xl font-semibold italic font-caption">Transaction Histories with Filter</h2>
      </div>
      <input name="transactionNumber" value={queries.transactionNumber} onChange={e => handleQueryData(e.target.value, e.target.name)} className="border-2 border-purple-500" />
      <input name="cashierID" value={queries.cashierID} onChange={e => handleQueryData(e.target.value, e.target.name)} className="border-2 border-purple-500" />
      <input name="customerID" value={queries.customerID} onChange={e => handleQueryData(e.target.value, e.target.name)} className="border-2 border-purple-500" />
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
      {
        (queries.fromDate && queries.toDate) && 
        <div>
          <p>from: </p>
          <p>{queries.fromDate.toLocaleString()}</p>
          <p>to:</p>
          <p>{queries.toDate.toLocaleString()}</p>
        </div>
      }
      <button onClick={handleSortingSubmit}>
      Click
    </button>
    </div>
  );
}

export default HistoriesWithFilter;