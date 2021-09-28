import React from 'react';
import { useDayzed } from 'dayzed';


/* Calendar Consts */
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

const weekdays = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];

const Calendar = ({ calendars, getBackProps, getForwardProps, getDateProps }) => {
  return calendars.length ? (
    <div id="calendar-wrapper" className="">

    </div>
  ) : null;
}

const DatePicker = props => {
  const dayzedData = useDayzed(props);

  return <Calendar {...dayzedData} />;
}

export default DatePicker;
