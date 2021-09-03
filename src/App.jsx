import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import { PrivateRoutes, PublicRoutes } from '@app/routes';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  
  return (
    <BrowserRouter>
        {
          loggedIn ? <PrivateRoutes /> : <PublicRoutes />
        }
        <Link to="/not-found">
          Not found
        </Link>
    </BrowserRouter>
  );
}

export default App;