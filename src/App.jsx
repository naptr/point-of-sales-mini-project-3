import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Routes from './Routes';
import { getLocalStorageItem } from '@app/utils/storage-utils';

const queryClient = new QueryClient();

const App = () => {
  const loggedIn = getLocalStorageItem('logged_in');

  return (
    <QueryClientProvider client={queryClient}>
      <Routes loggedIn={loggedIn} />
    </QueryClientProvider>
  );
}

export default App;