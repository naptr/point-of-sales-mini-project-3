import React, { useEffect, useRef } from 'react';
import { useQuery } from 'react-query';

import { getDashboardData } from '@app/api/dashboard_apis';

import '@app/assets/css/Dashboard/custom-style.css';
import { DashboardCardIcon } from '../../components/Icons';


const parseDashboardCardTitle = data => {
  switch(data) {
    case 'total_category':
      return 'CATEGORIES';
    case 'total_income':
      return 'TOTAL INCOME';
    case 'total_new_user_today':
      return 'TODAY NEW USER';
    case 'total_product':
      return 'PRODUCTS';
    case 'total_supplier':
      return 'SUPPLIERS';
    default:
      console.log(data);
  }
}

const MainDashboard = () => {
  const {
    data: dashboard,
    isLoading
  } = useQuery('dashboard', getDashboardData, {
    refetchOnWindowFocus: false
  });

  useEffect(() => dashboard && console.log(dashboard), [dashboard]);

  return (
    <div className="w-full flex-grow grid grid-cols-5 gap-8 font-body">
      <Card idx="total_income" cardData={dashboard && Intl.NumberFormat('id-ID').format(dashboard?.data.data.total_income)+" IDR"} isLoading={isLoading} />
      <Card idx="total_category" cardData={dashboard?.data.data.total_category} isLoading={isLoading} />
      <Card idx="total_product" cardData={dashboard?.data.data.total_product} isLoading={isLoading} />
      <Card idx="total_new_user_today" cardData={dashboard?.data.data.total_new_user_today} isLoading={isLoading} />
      <Card idx="total_supplier" cardData={dashboard?.data.data.total_supplier} isLoading={isLoading} />
    </div>
  )
}

export default MainDashboard;

const Card = ({ idx, cardData, isLoading }) => {

  useEffect(() => console.log(cardData), [cardData]);

  return (
    <div id="dashboard-card" className="h-24 rounded bg-white shadow-around pl-8">
      <div id="card-details" className="w-full h-full flex items-center flex-row space-x-6">
        {
          isLoading && <>
            <div className="h-12 w-12 rounded-full animate-pulse bg-gray-200" />
            <div className="h-full flex flex-col items-start justify-center space-y-2">
              <span className="h-7 w-16 bg-gray-200 rounded animate-pulse" />
              <span className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
            </div>
          </>
        }
        { 
          (cardData || typeof cardData == 'number') && <>
            <DashboardCardIcon type={idx} size="24" />
            <div id="card-information" className="h-full flex flex-col items-start justify-center">
              <span className="text-xl font-bold text-gray-600">
                {
                  cardData
                }
              </span>
              <span className="text-sm font-semibold text-gray-500">
                { parseDashboardCardTitle(idx) }
              </span>
            </div>
          </>
        }
      </div>
    </div>
  );
}