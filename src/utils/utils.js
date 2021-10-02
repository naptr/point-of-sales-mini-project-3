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

export const TRANSACTION_HISTORIES_NAVIGATION_DATA = [
  {
    path: `${main_url}/transactions/all-histories`,
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
    path: `${main_url}/transactions/histories-with-filter`,
    state: {
      id: 2,
      name: 'histories-with-filter',
      textContent: 'Histories with Filter',
      description: `
        Queried Histories sorted by Queries.
        Queries Provided by is: Date Range, Transaction Number, Cashier Number, Customer Number
        That's it.
      `
    }
  }
]

export const products_table_heads = [
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

export const transaction_histories_head = [
  {
    id: 'id',
    textContent: 'ID',
    classes: "px-4 w-24 flex items-center justify-center"
  },
  {
    id: 'transaction-number',
    textContent: 'Transaction Number',
    classes: "px-4 w-56 flex items-center justify-start"
  },
  {
    id: 'qty',
    textContent: 'Product Quantity',
    classes: "px-4 w-48 flex items-center justify-center"
  },
  {
    id: 'subtotal',
    textContent: 'Total',
    classes: "px-4 w-48 flex items-center justify-start"
  },
  {
    id: 'customer-id',
    textContent: 'Customer ID',
    classes: "px-4 w-36 flex items-center justify-center"
  },
  {
    id: 'cashier-id',
    textContent: 'Cashier ID',
    classes: "px-4 w-36 flex items-center justify-center"
  },
  {
    id: 'transaction-date',
    textContent: 'Date',
    classes: "px-4 w-48 flex items-center justify-start"
  }
]

export const staff_table_head_data = [
  {
    id: 'no',
    textContent: 'No',
    classes: "px-4 w-12 flex items-center justify-center"
  },
  {
    id: 'name',
    textContent: 'Name',
    classes: "px-4 w-64 flex items-center justify-start"
  },
  {
    id: 'username',
    textContent: 'Username',
    classes: "px-4 w-36 flex items-center justify-start"
  },
  {
    id: 'role',
    textContent: 'Role',
    classes: "px-4 w-36 flex items-center justify-center"
  },
  {
    id: 'email',
    textContent: 'Email',
    classes: "px-4 w-80 flex items-center justify-start"
  },
  {
    id: 'nohp',
    textContent: 'Phone',
    classes: "px-4 w-48 flex items-center justify-start"
  },
  {
    id: 'address',
    textContent: 'Address',
    classes: "px-4 w-24 flex items-center justify-start"
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
    case 'transactions':
      return 'Transactions';
    case 'reports':
      return 'Reports';
    case 'all-histories':
      return 'Histories';
    case 'histories-with-filter':
      return 'Histories By Date';
    default:
      throw new Error('None of above condition is choosen');
  }
  // console.log(url)
}

export const setProductsItemList = (item, idx) => {
  return [
    {
      id: 'item-number',
      child: idx,
      classes: "px-4 w-24 flex items-center justify-center"
    },
    {
      id: 'item-image',
      child: createElement('img', {
        src: item.image,
        className: 'h-12 w-12 object-cover'
      }),
      classes: "px-4 w-20 flex items-center justify-start h-12 object-cover"
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
      child: `Rp${new Intl.NumberFormat('id-ID').format(item.price)},00`,
      classes: "px-4 w-48 flex items-center justify-start"
    }
  ];
}

export const createTransactionRowData = data => {
  return [
    {
      id: 'id',
      child: data.id,
      classes: "px-4 w-24 flex items-center justify-center"
    },
    {
      id: 'transaction-number',
      child: data.no_transaction,
      classes: "px-4 w-56 flex items-center justify-start"
    },
    {
      id: 'qty',
      child: data.qty_product,
      classes: "px-4 w-48 flex items-center justify-center"
    },
    {
      id: 'subtotal',
      child: `Rp${new Intl.NumberFormat('id-ID').format(data.subtotal)},00`,
      classes: "px-4 w-48 flex items-center justify-start"
    },
    {
      id: 'customer-id',
      child: data.customer_id,
      classes: "px-4 w-36 flex items-center justify-center"
    },
    {
      id: 'cashier-id',
      child: data.kasir_id,
      classes: "px-4 w-36 flex items-center justify-center"
    },
    {
      id: 'transaction-date',
      child: data.date,
      classes: "px-4 w-48 flex items-center justify-start"
    }
  ]
}

export const createStaffRowData = (data, idx) => {
  return [
    {
      id: 'no',
      child: idx+1,
      classes: "px-4 w-12 flex items-center justify-center"
    },
    {
      id: 'name',
      child: [
        createElement('span', {children: `${data.firstName} ${data.lastName}`}),
        ( 
          data.email_verified_at != null ? 
          createElement('div', { 
            className: "h-3.5 w-3.5 rounded-full flex items-center justify-center bg-purple-500",
            children: createElement('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: "0 0 24 24",
              width: '10px',
              height: '10px',
              children: [
                createElement('path', { fill: 'none', d: "M0 0h24v24H0z" }),
                createElement('path', { d: "M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z", fill: "#fff" })
              ]
            })
          }) : null 
        )],
      classes: "px-4 w-64 flex flex-row space-x-1 items-center justify-start"
    },
    {
      id: 'username',
      child: data.username,
      classes: "px-4 w-36 flex items-center justify-start"
    },
    {
      id: 'role',
      child: createElement('div', {
        className: `h-full w-16 font-semibold py-0.5 flex items-center justify-center text-sm border-2 ${data.role == 'admin' ? 'bg-green-100 border-green-400 text-green-400' : data.role == 'kasir' ? 'bg-yellow-100 border-yellow-400  text-yellow-400' : data.role == 'manager' ? 'bg-red-100 border-red-400  text-red-400' : ''} rounded`,
        children: data.role
      }),
      classes: "px-4 w-36 flex items-center justify-center"
    },
    {
      id: 'email',
      child: data.email,
      classes: "px-4 w-80 flex items-center justify-start"
    },
    {
      id: 'nohp',
      child: data.nohp,
      classes: "px-4 w-48 flex items-center justify-start"
    },
    {
      id: 'address',
      child: data.address,
      classes: "px-4 w-24 flex items-center justify-start"
    }
  ]
}

export const itemNumberByPage = (page, itemIdx, dataLength) => {
  if (dataLength < 10 && page == 1) {
    return itemIdx + 1
  } else {
    return (page * 10) - ((page) - (itemIdx + 1)) - (dataLength - page);
  }
}

export const createTotal = details => {
  let total = 0;

  details.forEach(detail => total += detail.subtotal);

  return total;
} 