import { store } from '@app/utils/state-management/proxy';
import { createElement } from 'react';


/**
 * Objects and Contstantas
 */
export const REM = 16;
const main_url = store.dashboard_url;

export const sidebarItem = [
  {
    path: `${main_url}`,
    singlePath: 'here-dashboard',
    state: {
      id: 1,
      textContent: 'Dashboard',
      name: 'home',
    },
  },
  {
    path: `${main_url}/user-data`,
    singlePath: '/user-data',
    state: {
      id: 2,
      name: 'user_data',
      textContent: 'User Data',
    }
  },
  {
    path: `${main_url}/product-data`,
    singlePath: '/product-data',
    state: {
      id: 3,
      name: 'product_data',
      textContent: 'Product Data',
    }
  },
  {
    path: `${main_url}/search`,
    singlePath: '/search',
    state: {
      id: 4,
      name: 'search',
      textContent: 'Search',
    }
  },
  {
    path: `${main_url}/transactions`,
    singlePath: '/transactions',
    state: {
      id: 5,
      name: 'transactions',
      textContent: 'Transactions',
    }
  },
  {
    path: `${main_url}/reports`,
    singlePath: '/reports',
    state: {
      id: 6,
      name: 'reports',
      textContent: 'Reports',
    }
  }, 
  {
    path: `${main_url}/settings`,
    singlePath: '/settings',
    state: {
      id: 7,
      name: 'settings',
      textContent: 'Settings'
    }
  }
];

export const PRODUCTS_NAVIGATION_DATA = [
  {
    path: `${main_url}/product-data/products`,
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
    path: `${main_url}/product-data/categories`,
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

export const USERS_NAVIGATION_DATA = [
  {
    path: `${main_url}/user-data/users`,
    state: {
      id: 1,
      name: 'users',
      textContent: 'Users',
      description: `
        Here you can find the list of users who use the apps,
        only the users, not the staff nor the suppliers
      `
    }
  },
  {
    path: `${main_url}/user-data/staff`,
    state: {
      id: 2,
      name: 'staff',
      textContent: 'Staff',
      description: `
        Here you can find the list of staff who manage the apps,
        only the staff, not the users nor the suppliers
      `
    }
  },
  {
    path: `${main_url}/user-data/suppliers`,
    state: {
      id: 3,
      name: 'suppliers',
      textContent: 'Suppliers',
      description: `
        Here you can find the list of suppliers who supply the products,
        only the suppliers, not the staff nor the users
      `
    }
  }
]

export const REPORTS_NAVIGATION_DATA = [
  {
    path: `${main_url}/reports/all-histories`,
    state: {
      id: 1,
      name: 'all-histories',
      textContent: 'Histories',
      description: `
        Where all histories of user's transactions were stored here,
        go and check it by yourself.
      `
    }
  },
  {
    path: `${main_url}/reports/histories-by-date`,
    state: {
      id: 2,
      name: 'histories-by-date',
      textContent: 'Histories per Date',
      description: `
        Queried Histories sorted by Date, ranged from - to as you like.
        That's it.
      `
    }
  }
]

export const products_table_heads = [
  // {
  //   id: 'product-number',
  //   textContent: 'No',
  //   classes: "px-4 w-24 flex items-center justify-center"
  // },
  {
    id: 'product-number',
    textContent: 'No',
    classes: "px-4 w-24 flex items-center justify-center"
  },
  {
    id: 'product-image',
    textContent: 'Image',
    classes: "px-4 w-20 flex items-center justify-start"
  },
  {
    id: 'product-name',
    textContent: 'Name',
    classes: "px-4 w-96 flex items-center justify-start"
  },
  {
    id: 'product-id',
    textContent: 'ID',
    classes: "px-4 w-24 flex items-center justify-center"
  },
  {
    id: 'product-category',
    textContent: 'Category',
    classes: "px-4 w-56 flex items-center justify-start"
  },
  {
    id: 'product-supplier',
    textContent: 'Supplier',
    classes: "px-4 w-56 flex items-center justify-start"
  },
  {
    id: 'product-stocks',
    textContent: 'Stocks',
    classes: "px-4 w-24 flex items-center justify-center"
  },
  {
    id: 'product-price',
    textContent: 'Price',
    classes: "px-4 w-48 flex items-center justify-start"
  }
]


/**
 * Functions Utils
 */
export function returnObjectKey(state, idx) {
  return Object.keys(state)[ idx ];
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
  if (idx > 0) {
    const dirs = [];
    for (let i = 0; i <= idx; i++) {
      dirs.push(arr[ i ]);
    }
    return dirs;
  } else {
    return [ arr[ idx ] ];
  }
}

export const parseURLToTitle = (url) => {
  switch (url) {
    case 'dashboard':
      return 'Dashboard';
    case 'product-data':
      return "Product Data";
    case 'categories':
      return 'Categories';
    case 'products':
      return 'Products';
    case 'category-details':
      return "Category Details";
    case 'user-data':
      return 'User Data';
    case 'users':
      return 'Users';
    case 'staff':
      return 'Staff';
    case 'suppliers':
      return 'Suppliers';
    case 'reports':
      return 'Reports';
    case 'all-histories':
      return 'Histories';
    case 'histories-by-date':
      return 'Histories By Date';
    default:
      throw new Error('None of above condition is choosen');
  }
  // console.log(url)
}

export const setProductsItemList = (item, idx) => {
  return [
    // {
    //   id: 'item-number',
    //   child: key,
    //   classes: "px-4 w-24 flex items-center justify-center"
    // },
    {
      id: 'item-number',
      child: idx,
      classes: "px-4 w-24 flex items-center justify-center"
    },
    {
      id: 'item-image',
      child: createElement('img', {
        src: item.image,
        width: '48',
        height: '48',
      }),
      classes: "px-4 w-20 flex items-center justify-start h-12"
    },
    {
      id: 'item-name',
      child: item.product_name,
      classes: "px-4 w-96 flex items-center justify-start"
    },
    {
      id: 'item-id',
      child: item.id,
      classes: "px-4 w-24 flex items-center justify-center"
    },
    {
      id: 'item-category',
      child: item.category.category_name,
      classes: "px-4 w-56 flex items-center justify-start"
    },
    {
      id: 'item-supplier',
      child: item.supplier_name,
      classes: "px-4 w-56 flex items-center justify-start"
    },
    {
      id: 'item-stock',
      child: item.stock,
      classes: "px-4 w-24 flex items-center justify-center"
    },
    {
      id: 'item-price',
      child: new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price),
      classes: "px-4 w-48 flex items-center justify-start"
    }
  ];
}

export const itemNumberByPage = (page, itemIdx, dataLength) => {
  if (dataLength < 10 && page == 1) {
    return itemIdx + 1
  } else {
    return (page * 10) - ((page) - (itemIdx + 1)) - (dataLength - page);
  }
}

export const dateParserWithRegex = date => {
  return JSON.stringify(date).match(/(\d{4}-\d{2}-\d{2})/g)[ 0 ];
}