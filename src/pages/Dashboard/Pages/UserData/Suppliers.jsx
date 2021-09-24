import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

import { getSuppliers } from '@app/api/dashboard';

const Suppliers = () => {
  const {
    data: suppliers,
    isLoading,
    isSuccess,
    error
  } = useQuery('suppliers', getSuppliers, {
    refetchOnWindowFocus: false
  });

  useEffect(() => suppliers && console.log(suppliers), [suppliers])

  return (
    <div>
      {
        suppliers?.data.data.map(supplier => <p>{ supplier.supplier_name }, { supplier.address }</p>)
      }
    </div>
  );
}

export default Suppliers;