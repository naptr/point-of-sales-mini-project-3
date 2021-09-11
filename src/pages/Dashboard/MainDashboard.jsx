import React, { useEffect, useState } from 'react';
import { useSnapshot } from 'valtio';

import '@app/assets/css/Dashboard/custom-style.css';
import { store } from '@app/utils/state-management/proxy';

const MainDashboard = () => {
  return (
    <div className="ml-14">
      <h1>Main Dashboard</h1>
    </div>
  )
}

export default MainDashboard;