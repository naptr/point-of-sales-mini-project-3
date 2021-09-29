import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { getDashboardData } from '@app/api/dashboard_apis';

import '@app/assets/css/Dashboard/custom-style.css';


const MainDashboard = () => {
  const {
    data: dashboard,
    isLoading
  } = useQuery('dashboard', getDashboardData, {
    refetchOnWindowFocus: false
  });

  useEffect(() => dashboard && console.log(dashboard), [dashboard]);

  return (
    <div className="w-full flex-grow flex items-center justify-center">
      <h1>Main Dashboard</h1>
    </div>
  )
}

export default MainDashboard;