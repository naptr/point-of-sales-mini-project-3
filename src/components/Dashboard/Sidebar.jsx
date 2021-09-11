import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { NeatLeaf } from '@app/components/Logo/NeatLogo';
import { Line, Fill, ArrowRight } from '@app/components/Icons';

import { REM } from '@app/utils/utils';
import { store } from '@app/utils/state-management/proxy';


const Sidebar = () => {
  const sidebarRef = useRef(null);
  const componentLocation = useLocation();
  const [data, setData] = useState(null);
  const [openSidebar, setOpenSidebar] = useState(false);

  const sidebarItem = [
    { id: 1,
      name: 'home',
      text: 'Dashboard',
      obj: {
        path: `${store.dashboard_url}`,
      },
    },
    {
      id: 2,
      name: 'product_data',
      text: 'Product Data',
      obj: {
        path: `${store.dashboard_url}/product-data`,
        state: ''
      }
    },
    {
      id: 3,
      name: 'user_data',
      text: 'User Data',
      obj: {
        path: `${store.dashboard_url}/user-data`,
        state: ''
      }  
    },
    {
      id: 4,
      name: 'search',
      text: 'Search',
      obj: {
        path: `${store.dashboard_url}/search`,
        state: ''
      }
    },
    {
      id: 5,
      name: 'transactions',
      text: 'Transactions',
      obj: {
        path: `${store.dashboard_url}/transactions`,
        state: ''
      }
    },
    {
      id: 6,
      name: 'reports',
      text: 'Reports',
      obj: {
        path: `${store.dashboard_url}/reports`,
        state: ''
      }
    }
  ];

  const handleRefData = (data) => {
    setData(data);
  }

  const handleSidebarHover = () => {
    setOpenSidebar(!openSidebar)
  }

  useEffect(() => console.log(sidebarRef.current.offsetWidth), [openSidebar])

  return (
    <div ref={sidebarRef} id="dashboard-sidebar" className={`font-body absolute h-full w-14 flex-shrink bg-gray-800 transition-all duration-300 ease-out tracking-wider ${openSidebar ? 'w-56' : 'w-14'} shadow-2xl`}>
      <div id="sidebar-item-wrapper" className="h-full w-full flex flex-col justify-between">
        <div id="top-items-wrapper" className="h-full w-full py-4 flex flex-col items-center space-y-16 relative">
          <div id="logo" className="w-full flex-shrink flex items-center justify-start pl-2.5 static">
            <NeatLeaf leafSize={`${2.25*REM}`} />
          </div>
          <div id="items" className="w-full flex-grow h-full">
            <ul className="flex flex-col items-center space-y-6">
              {sidebarItem.map((item) => (
                <SidebarItem key={item.id} item={item} size={1.75 * REM} color="#8B5CF6" active={(item.obj.path === componentLocation.pathname) && true} hover={handleRefData} sidebarOpen={openSidebar} />
              ))}
            </ul>
          </div>
          <button onClick={handleSidebarHover} className="static flex items-center justify-start pl-2.5 w-full h-12">
            <ArrowRight size={1.75 * REM} color="#8B5CF6" active={openSidebar} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;


const SidebarItem = ({ item, size, color, active, hover, sidebarOpen }) => {
  const itemRef = useRef(null);
  const [ hovered, setHovered ] = useState(false);

  const handleMouseEnterAndLeave = () => {
    if (!hovered) {
      hover(itemRef);
      setHovered(true);
    } else {
      hover(null);
      setHovered(false);
    }
  }

  return (
    <li ref={itemRef} onMouseEnter={handleMouseEnterAndLeave} onMouseLeave={handleMouseEnterAndLeave} id="item" className={` h-full w-full transition-all ease-out hover:border-l-4 hover:border-purple-500 hover:bg-gray-700 ${active ? 'border-l-4 border-purple-500' : 'border-gray-800'}`}>
      <Link to={item.obj.path} className={`h-12 py-2.5 flex justify-start pl-3 static items-center w-full flex-row relative`}>
        {
          <p className={`z-0 transform absolute ${sidebarOpen ? 'translate-x-11 opacity-1' : '-translate-x-12 opacity-0'} text-purple-300 transition-all duration-300 ease-out text-sm`}>{item.text}</p>
        }
        {
          active || hovered ? <Fill name={item.name} size={`${size}`} color={`${color}`} /> : <Line name={item.name} size={`${size}`} color={`${color}`} />
        }
      </Link>
    </li>
  );
}