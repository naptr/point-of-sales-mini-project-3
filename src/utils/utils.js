import { store } from '@app/utils/state-management/proxy';

/**
 * Functions Utils
 */
export function returnObjectKey(state, idx) {
  return Object.keys(state)[idx];
}

/**
 * Sidebar
 *  */

export const matchUrl = (url) => {
  let displayTitle = '';

  for (const item of sidebarItem) {
    if (url.includes(item.singlePath)) {
      displayTitle = item.state.textContent;
    }
  }

  return displayTitle;
}

export const createBreadcrumbsURL = (idx, arr) => {
  switch (idx) {
    case 0:
      return [ arr[ idx ] ];
    case 1:
    case 2:
      const dirs = [];
      for (let i = 0; i <= idx; i++) {
        dirs.push(arr[ i ]);
      }
      return dirs;
    default:
      throw new Error('Hiya hiya error!');
  }
}

/**
 * Objects and Contstantas
 */
export const REM = 16;

export const sidebarItem = [
  {
    path: `${store.dashboard_url}`,
    singlePath: 'here-dashboard',
    state: {
      id: 1,
      textContent: 'Dashboard',
      name: 'home',
    },
  },
  {
    path: `${store.dashboard_url}/user-data`,
    singlePath: '/user-data',
    state: {
      id: 2,
      name: 'user_data',
      textContent: 'User Data',
    }
  },
  {
    path: `${store.dashboard_url}/product-data`,
    singlePath: '/product-data',
    state: {
      id: 3,
      name: 'product_data',
      textContent: 'Product Data',
    }
  },
  {
    path: `${store.dashboard_url}/search`,
    singlePath: '/search',
    state: {
      id: 4,
      name: 'search',
      textContent: 'Search',
    }
  },
  {
    path: `${store.dashboard_url}/transactions`,
    singlePath: '/transactions',
    state: {
      id: 5,
      name: 'transactions',
      textContent: 'Transactions',
    }
  },
  {
    path: `${store.dashboard_url}/reports`,
    singlePath: '/reports',
    state: {
      id: 6,
      name: 'reports',
      textContent: 'Reports',
    }
  }, 
  {
    path: `${store.dashboard_url}/settings`,
    singlePath: '/settings',
    state: {
      id: 7,
      name: 'settings',
      textContent: 'Settings'
    }
  }
];

export const product_data = [
  {
    path: `${store.dashboard_url}/product-data/products`,
    state: {
      id: 1,
      name: 'products',
      textContent: 'Products',
      description: `
        This is Description of Products,
        Place where you store your products list, and where you can find all of your products
      `
    }
  },
  {
    path: `${store.dashboard_url}/product-data/categories`,
    state: {
      id: 2,
      name: 'categories',
      textContent: 'Categories',
      description: `
        This is Description of Categories,
        Place where you can store your categories list, and where you can find all of your categories
      `
    }
  }
]