import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

import { Card } from '@app/components/Dashboard/Category';

import { getCategories } from '@app/api/dashboard';


const Main = () => {
  const {
    data: categories,
    isLoading,
    isFetching,
    isSuccess,
    error
  } = useQuery('categories', getCategories);

  return (
    <div className="h-full w-full grid grid-cols-3 gap-x-64 gap-y-16">
      {
        isLoading && <h1>Loading</h1>
      }
      {
        categories?.data.data.map(category => <Card item={category} />)
      }
    </div>
  )
}

export default Main;