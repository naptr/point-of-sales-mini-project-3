import React, { useEffect, useState } from 'react';

import '@app/assets/css/Dashboard/custom-style.css';
import NeatLogo from '@app/components/Logo/NeatLogo';

const MainDashboard = () => {
  const [appearSmth, setAppearSmth] = useState(true);
  const [pageVisited, setPageVisited] = useState(false);

  const doAppearSmth = () => {
    if (appearSmth) {
      setTimeout(() => setAppearSmth(false), 1500);
    }
  }

  useEffect(() => {
    doAppearSmth();
  }, []);

  return ( 
    <div className="h-full flex flex-col relative">
      {
        pageVisited ? 
        <h2>Dashboard</h2> : 
        <>
          <div className={`test flex-grow absolute h-full w-full flex items-center justify-center flex-col space-y-1.5 ${appearSmth ? 'appear' : 'disappear'}`}>
            <NeatLogo height="5rem" color="#fff" />
            <div id="logo-desc" className="text-white flex items-center justify-center flex-col font-caption font-normal tracking-widest">
              <p className="text-lg text-center">a Point of Sales System for Organizing Your Bussiness</p>
            </div>
          </div>
          {
            appearSmth ? null : <h2>Dashboard</h2>
          }
        </>
      }
    </div> 
  );
}

export default MainDashboard;