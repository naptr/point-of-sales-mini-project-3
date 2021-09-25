import React from 'react';
import { Link } from 'react-router-dom';


const BreadCrumbsURL = (props) => {
  const { children } = props;

  return (
    <div className="transition-all duration-300 flex flex-row space-x-1 items-center justify-center">
      <span className="text-purple-500 text-xl">/</span>
      <Link {...props} className="hover:text-purple-500 transition-all duration-300 bg-white hover:bg-purple-100 px-2 py-1 rounded-sm">
        <p>{children}</p>
      </Link>
    </div>
  )
}

export default BreadCrumbsURL;