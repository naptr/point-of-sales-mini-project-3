import React from 'react';
import { useHistory } from 'react-router';


const CategoryDetails = () => {
  const history = useHistory();

  return (
    <>
      <h1>Details of Category</h1>
      <pre>
        {
          JSON.stringify(history, null, 2)
        }
      </pre>
    </>
  );
}

export default CategoryDetails;