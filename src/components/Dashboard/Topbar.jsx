import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { matchUrl } from '@app/utils/utils';

const Topbar = () => {
  const location = useLocation();

  const test = matchUrl(location.pathname);

  return (
    <div className={`bg-white h-18 flex items-center w-full flex items-center justify-between`}>
      <h1 className="font-title font-bold italic text-3xl text-purple-500">
        {
          location.pathname === '/dashboard' ? 'Dashboard' : test
        }
      </h1>
    </div>
  );
}

export default Topbar;