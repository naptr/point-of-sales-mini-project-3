import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

const Topbar = () => {
  const currentLocation = useLocation();

  useEffect(() => console.log(currentLocation), []);

  return (
    <div className="w-full ">

    </div>
  );
}

export default Topbar;