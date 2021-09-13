import React, { useEffect } from 'react';

import NeatLogo from '@app/components/Logo/NeatLogo';

import { REM } from '@app/utils/utils';

import '../../assets/css/Dashboard/custom-style.css';

const Splashscreen = ({ appear }) => {

  return (
    <div className={`greeting flex-grow absolute h-screen w-full flex items-center justify-center flex-col space-y-2.5 ${appear ? 'appear' : 'disappear'} z-20`}>
      <NeatLogo height="5rem" color="#fff" leafSize={`${4 * REM}`} />
      <div id="logo-desc" className="text-white flex items-center justify-center flex-col font-caption font-normal tracking-widest">
        <p className="text-lg text-center">a Point of Sales System for Organizing Your Bussiness</p>
      </div>
    </div>
  );
}

export default Splashscreen;