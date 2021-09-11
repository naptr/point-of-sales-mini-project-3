import React from 'react';
import { useSnapshot } from 'valtio';

import { store } from '@app/utils/state-management/proxy';

const ProductList = () => {
  const snap = useSnapshot(store);

  return (
    <>
      <h1>Product List</h1>
      {snap.current_location}
    </>
  );
}

export default ProductList;