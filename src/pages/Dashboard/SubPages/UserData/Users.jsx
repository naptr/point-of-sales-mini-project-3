import React, { useEffect } from 'react';

import UsersTable from '@app/components/Dashboard/UserData/Users/UsersTable';

import { getUsersAll } from '@app/api/dashboard_apis';
import { useQuery } from 'react-query';


const Users = () => {
  const {
    data: users,
    isLoading
  } = useQuery('users', getUsersAll, {
    refetchOnWindowFocus: false
  });

  useEffect(() => console.log(users), [users]);

  return (
    <div className="flex flex-col flex-grow justify-between relative">
      <div id="users-list-title" className="w-full h-10 flex justify-between items-center text-purple-500">
        <h2 className="text-xl font-semibold italic font-caption">Users List</h2>
      </div>
      <UsersTable bodyData={users?.data.data} getDataLoading={isLoading} />
    </div>
  );
}

export default Users;