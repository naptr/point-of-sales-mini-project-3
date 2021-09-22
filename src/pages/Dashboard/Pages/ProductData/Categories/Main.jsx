import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';


const Main = () => {
  return (
    <>
      <h1>Categories</h1>
      <Link to='/dashboard/product-data'>Back</Link>
    </>
  );
}

export default Main;