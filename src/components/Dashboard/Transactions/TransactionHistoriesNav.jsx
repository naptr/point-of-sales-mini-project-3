import React from 'react';
import { useLocation } from 'react-router-dom';

import { BackIcon } from '@app/components/Icons';
import BreadCrumbsURL from '@app/components/Dashboard/BreadCrumbsURL';

import { createBreadcrumbsURL, parseURLToTitle } from '@app/utils/utils';


const TransactionHistoriesNav = () => {
  const { pathname } = useLocation()

  const [ dir, ...directoryTree ] = pathname.split('/');

  return (
    <div id="transaction-histories-nav" className="w-fulll flex items-center justify-start space-x-6 h-12">
      <div id="directory-tree" className="flex flex-row font-caption text-sm space-x-2">
        {directoryTree.map((dir, idx) => <BreadCrumbsURL to={`/${createBreadcrumbsURL(directoryTree.indexOf(dir), directoryTree).join('/')}`} key={idx}>{parseURLToTitle(dir)}</BreadCrumbsURL>)}
      </div>
    </div>
  );
}

export default TransactionHistoriesNav;