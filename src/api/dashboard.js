import { dashboard } from './apis';


const products_URL = '/products';
const single_product_URL = '/product';
const categories_URL = '/categories';
const single_category_URL = '/category';
const suppliers_URL = '/suppliers';


/**
 * Get
 * @param { number } page 
 * @returns 
 */

// Product APIs
export const getProducts = async (page = 1) => {
  const products = await dashboard.get(`${products_URL}?page=${page}`);

  return products;
}

export const getProductDetailsByID = async id => {
  const details = await dashboard.get(`${products_URL}/${id}`);

  return details;
}

// Suplliers APIs
export const getSuppliers = async () => {
  const suppliers = await dashboard.get(suppliers_URL);

  return suppliers;
}

// Categories APIs
export const getCategories = async () => {
  const categories = await dashboard.get(categories_URL);

  return categories;
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

export const deleteProductByID = async (id) => {
  const response = await dashboard.delete(`${single_product_URL}/delete/${id}`);

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
export const editCategory = async id => {
  const response = await dashboard.post(`${single_product_URL}/update/${id}`);

  return response;
}