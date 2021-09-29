import React, { useEffect, useState } from 'react'; 
import { useMutation, useQuery } from 'react-query';

import DatePicker from '@app/components/DatePicker';

import { dateParserWithRegex } from '@app/utils/utils';
import { getOrderHistoriesByDate } from '@app/api/dashboard';

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

const HistoriesByDate = () => {
  const [filteredHistories, setFilteredHistories] = useState([]);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [queryParams, setQueryParams] = useState([]);

  // const localeOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const handleFormDate = ({ date }) => {
    setFromDate(date);
    // setQueryParams([...queryParams, `from=${formatDateToServerAcceptable(date)}`]);
  }
  
  const handleToDate = ({date}) => {
    setToDate(date);
    // setQueryParams([ ...queryParams, `to=${formatDateToServerAcceptable(date)}` ]);
  }

  const testClick = () => {
    
    console.log(queryParams.join('&'));
  }

  useEffect(() => console.log(queryParams), [queryParams]);
  
  // useEffect(() => {
  //   return () => {
  //     console.log('cleaned-up')
  //   };
  // })

  return (
    <div id="histories-by-date-container-wrapper" className="flex flex-col flex-grow justify-between relative">
      <div id="histories-title" className="w-full h-10 flex justify-between items-center text-purple-500">
        <h2 className="text-xl font-semibold italic font-caption">Transaction Histories - Date Based</h2>
      </div>
      <DatePicker
        selected={fromDate}
        onDateSelected={handleFormDate}
        showOutsideDays={true}
      />
      <DatePicker
        selected={toDate}
        onDateSelected={handleToDate}
        showOutsideDays={true}
      />
      {
        (fromDate && toDate) && 
        <div>
          <p>from: </p>
          <p>{fromDate.toLocaleString()}</p>
          <p>to:</p>
          <p>{toDate.toLocaleString()}</p>
        </div>
      }
    <button onClick={testClick}>
      Click
    </button>
    </div>
  );
}

export default HistoriesByDate;