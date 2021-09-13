import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';

const Topbar = () => {
  const location = useLocation();

  const handleLogoutTest = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('logged_in');

    window.location.reload(); 
  }

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
      <button onClick={handleLogoutTest}>Logout</button>
    </div>
  );
}

export default Topbar;