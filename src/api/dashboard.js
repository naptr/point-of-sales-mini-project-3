import { dashboard } from './apis';


const products_URL = '/products';
const categories_URL = '/categories';
const suppliers_URL = '/suppliers';
const single_product_URL = '/product';


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
  const details = await dashboard.get(`${products_URL}/details/${id}`);

  return details;
}

// Suplliers APIs
export const getSuppliers = async () => {
  const suppliers = await dashboard.get(suppliers_URL);

  return suppliers;
}

// Categories APIs
export const getCategories = async () => {
  const categories = await dashboard.get(categories);

  return categories;
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
 * @param { } 
 */

export const postNewProduct = async (data) => {
  const response = await dashboard.post(`${single_product_URL}/add`, data);

  return response;
}