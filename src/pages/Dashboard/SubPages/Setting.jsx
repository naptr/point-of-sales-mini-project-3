import React from 'react';
import { logout } from '@app/utils/auth-utils';

const Settings = () => {
  return (
    <>
      <h1>
        <button onClick={logout} className="px-3 py-2.5 bg-red-500 flex items-center justify-center rounded text-white font-caption hover:bg-red-600 active:bg-red-500">Logout</button>
      </h1>
    </>
  );
}

export default Settings;