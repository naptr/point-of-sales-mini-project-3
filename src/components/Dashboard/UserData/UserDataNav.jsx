import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

import BreadCrumbsURL from '@app/components/Dashboard/BreadCrumbsURL';
import { BackIcon } from '@app/components/Icons';

import { createBreadcrumbsURL, parseURLToTitle } from '@app/utils/utils';


const UserDataNav = () => {
  const { pathname } = useLocation();

  const [dir, ...directoryTree] = pathname.split('/');

  return (
    <div id="user-data-nav" className="w-fulll flex flex-row items-center justify-start space-x-6 h-12">
      <div id="back-button" className="h-full flex items-center justify-center">
        <button onClick={() => window.history.back()} className="transition-all duration-300 bg-white hover:bg-purple-100 p-2 rounded">
          <BackIcon size="20" />
        </button>
      </div>
      <div id="directory-tree" className="flex flex-row font-caption text-sm space-x-2">
        {directoryTree.map((dir, idx) => <BreadCrumbsURL to={`/${createBreadcrumbsURL(directoryTree.indexOf(dir), directoryTree).join('/')}`} key={idx}>{parseURLToTitle(dir)}</BreadCrumbsURL>)}
      </div>
    </div>
  );
}

export default UserDataNav;