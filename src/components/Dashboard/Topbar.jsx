import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { matchUrl } from '@app/utils/utils';

const Topbar = () => {
  const location = useLocation();

  const currentURL = matchUrl(location.pathname);

  return (
    // <Link className={`bg-white h-18 w-full flex items-center justify-between`}>
    <div className="bg-white h-18 w-full flex items-center justify-between">
      <h1 className="font-title font-bold italic text-3xl text-purple-500">
        {
          location.pathname === '/dashboard' ? 'Dashboard' : currentURL
        }
      </h1>
    </div>
    // </Link>
  );
}

export default Topbar;