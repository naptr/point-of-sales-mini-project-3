import React, { useEffect, useState } from 'react'; 

import { useMutation, useQuery } from 'react-query';

import { dateParserWithRegex } from '@app/utils/utils';
import { getOrderHistoriesByDate } from '@app/api/dashboard';

import "react-datepicker/dist/react-datepicker.css";


const HistoriesByDate = () => {
  const [filteredHistories, setFilteredHistories] = useState([]);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const queryParams = [];

  const testClick = async () => {
    try {
      const result = await getOrderHistoriesByDate(queryParams);

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div id="histories-by-date-container-wrapper" className="flex flex-col flex-grow justify-between relative">
      <div id="histories-title" className="w-full h-10 flex justify-between items-center text-purple-500">
        <h2 className="text-xl font-semibold italic font-caption">Transaction Histories - Date Based</h2>
      </div>
      <button onClick={testClick}>
        Test
      </button>
      <pre>
      </pre>
      <div className="h-full w-full flex items-center justify-center">
        
      </div>
    </div>
  );
}

export default HistoriesByDate;