import React, { useContext } from 'react';

import Routes from './Routes';
import { getLocalStorageItem } from './utils/utils';


const App = () => {
  const loggedIn = getLocalStorageItem('logged_in');

  return (
    <Routes loggedIn={loggedIn} />
  );
}

export default App;