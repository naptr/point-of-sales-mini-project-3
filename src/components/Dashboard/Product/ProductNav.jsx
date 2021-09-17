import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createBreadcrumbsURL } from '@app/utils/utils';
import { BackIcon } from '@app/components/Icons';


const ProductNav = () => {
  const history = useHistory();
  const [hoverColor, setHoverColor] = useState(false);

  const [dir, ...directoryTree] = (history.location.pathname).split('/');

  const parseURLToTitle = (url) => {
    switch (url) {
      case 'dashboard':
        return 'Dashboard';
      case 'product-data':
        return 'Product Data';
      case 'categories':
        return 'Categories';
      case 'products':
        return 'Products';
      default:
        throw new Error('None of above condition is choosen');
    }
  }

  const handleBackToMainProduct = () => {
    history.push('/dashboard/product-data');
  }

  const handleMouseHover = () => {
    setHoverColor(!hoverColor);
  }

  return (
    <div id="product-data-nav" className="w-fulll flex flex-row items-center justify-start space-x-6 h-12">
      <div id="back-button" className="h-full flex items-center justify-center">
        <button onClick={handleBackToMainProduct} className="transition-all duration-300 bg-white hover:bg-purple-100 p-2 rounded">
          <BackIcon size="20" />
        </button>
      </div>
      <div id="directory-tree" className="flex flex-row font-caption text-sm space-x-2">
        {directoryTree.map((dir, idx) => <BreadCrumbsURL to={`/${createBreadcrumbsURL(directoryTree.indexOf(dir), directoryTree).join('/')}`} key={idx}>{ parseURLToTitle(dir) }</BreadCrumbsURL>)}
      </div>
    </div>
  );
}

const BreadCrumbsURL = (props) => {
  const { children } = props;

  return (
    <div className="transition-all duration-300 flex flex-row space-x-1 items-center justify-center">
      <span className="text-purple-500 text-xl">/</span>
      <Link {...props} className="hover:text-purple-500 transition-all duration-300 bg-white hover:bg-purple-100 px-2 rounded">
        <p>{ children }</p>
      </Link>
    </div>
  )
}

export default ProductNav;