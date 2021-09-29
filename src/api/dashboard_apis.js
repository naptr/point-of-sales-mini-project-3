import { dashboard } from './apis';


const products_URL = '/products';
const single_product_URL = '/product';
const categories_URL = '/categories';
const single_category_URL = '/category';
const suppliers_URL = '/suppliers';
const single_supplier_URL = '/supplier';
const histories_URL = '/check-out/histories';


/**
 * Get
 * @param { number } page 
 * @returns 
 */

// Product
export const getProducts = async (page = 1) => {
  const products = await dashboard.get(`${products_URL}?page=${page}`);

  return products;
}

export const getProductDetailsByID = async id => {
  const details = await dashboard.get(`${products_URL}/${id}`);

  return details;
}

// Suplliers
export const getSuppliers = async () => {
  const suppliers = await dashboard.get(suppliers_URL);

  return suppliers;
}

// Categories
export const getCategories = async () => {
  const categories = await dashboard.get(categories_URL);

  return categories;
}

// Reports  
export const getOrderHistories = async () => {
  const histories = await dashboard.get(histories_URL);

  return histories;
}

export const getHistoriesWithFilter = async queryParams => {
  const histories_by_date = await dashboard.get(`${histories_URL}/sorting/search?${queryParams}`);
  
  return histories_by_date;
}

// Multiple Requests
export const getMultipleRequest = async requests => {
  try {
    const result = await Promise.all(requests);

    return result;
  } catch (error) {
    return error;
  }
}

/**
 * Delete
 * @param { string } id
 */

export const deleteProductByID = async id => {
  const response = await dashboard.delete(`${single_product_URL}/delete/${id}`);

  return response;
}

export const deleteCategoryByID = async id => {
  const response = await dashboard.delete(`${single_category_URL}/delete/${id}`);

  return response;
}

export const deleteSupplierByID = async id => {
  const response = await dashboard.delete(`${single_supplier_URL}/delete/${id}`);

  return response;
}

/**
 * Post
 * @param { FormData } data
 */

// Create
export const createProduct = async data => {
  const response = await dashboard.post(`${single_product_URL}/add`, data);

  return response;
}

export const createCategory = async data => {
  const response = await dashboard.post(`${single_category_URL}/add`, data);

  return response;
}

export const createSupplier = async data => {
  const response = await dashboard.post(`${single_supplier_URL}/add`, data);

  return response;
}

// Edit


/**
 * Edit Product
 * @param { FormData } data 
 * @param { Number } product_id 
 * @returns 
 */
export const editProductDetails = async (data, product_id) => {
  const response = await dashboard.post(`${single_product_URL}/update/${product_id}`, data);

  return response;
}

/**
 * Edit Category
 * @param { Number } id
 */
export const editCategory = async (data, category_id) => {
  const response = await dashboard.post(`${single_category_URL}/update/${category_id}`, data);

  return response;
}

/**
 * Edit Supplier
 * @param { FormData } data
 * @param { Number } product_id
 */
export const editSupplier = async (data, supplier_id) => {
  const response = await dashboard.post(`${single_supplier_URL}/update/${supplier_id}`, data);

  return response;
}