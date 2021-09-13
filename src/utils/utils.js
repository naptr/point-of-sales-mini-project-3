import { store } from '@app/utils/state-management/proxy';

/**
 * Functions Utils
 */
export function returnObjectKey(state, idx) {
  return Object.keys(state)[idx];
}

/**
 * Constantas
 */
export const REM = 16;

export const sidebarItem = [
  {
    path: `${store.dashboard_url}`,
    state: {
      id: 1,
      textContent: 'Dashboard',
      name: 'home',
    },
  },
  {
    path: `${store.dashboard_url}/user-data`,
    state: {
      id: 2,
      name: 'user_data',
      textContent: 'User Data',
    }
  },
  {
    path: `${store.dashboard_url}/product-data`,
    state: {
      id: 3,
      name: 'product_data',
      textContent: 'Product Data',
    }
  },
  {
    path: `${store.dashboard_url}/search`,
    state: {
      id: 4,
      name: 'search',
      textContent: 'Search',
    }
  },
  {
    path: `${store.dashboard_url}/transactions`,
    state: {
      id: 5,
      name: 'transactions',
      textContent: 'Transactions',
    }
  },
  {
    path: `${store.dashboard_url}/reports`,
    state: {
      id: 6,
      name: 'reports',
      textContent: 'Reports',
    }
  }
];

export const settingsObject = {
  path: `${store.dashboard_url}/settings`,
  state: {
    id: 1,
    name: 'settings',
    textContent: 'Settings'
  }
}