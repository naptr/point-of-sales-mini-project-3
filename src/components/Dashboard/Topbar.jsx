import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';

const Topbar = () => {
  const location = useLocation();

  return (
    <div className={`bg-white h-18 flex items-center w-full flex items-center justify-between`}>
      <h1 className="font-title font-bold italic text-3xl text-purple-500">
        {
          location.state?.textContent
        }
        {
          location.state === undefined && 'Dashboard'
        }
      </h1>
    </div>
  );
}

export default Topbar;