import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

import StaffTable from '@app/components/Dashboard/UserData/Staff/StaffTable';

import { getStaffAll } from '@app/api/dashboard_apis';


const Staff = () => {
  const {
    data: staff,
    isLoading
  } = useQuery('staff', getStaffAll, {
    refetchOnWindowFocus: false
  });

  useEffect(() => console.log(staff), [staff]);

  return (
    <div className="flex flex-col flex-grow justify-between relative">
      <div id="staff-list-title" className="w-full h-10 flex justify-between items-center text-purple-500">
        <h2 className="text-xl font-semibold italic font-caption">Staff List</h2>
      </div>
      <StaffTable bodyData={staff?.data.data} getDataLoading={isLoading} />
    </div>
  );
}

export default Staff;