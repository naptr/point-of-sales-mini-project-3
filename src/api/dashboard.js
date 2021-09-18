import { dashboard } from './apis';

const token = localStorage.getItem('token');

// Product APIs

/**
 * Get
 * @param { number } page 
 * @returns 
 */

export const getProducts = async (page = 1) => {
  const products = await dashboard.get(`/products?page=${page}`);

  return products;
}

export const getSuppliers = async () => {
  const suppliers = await dashboard.get('/suppliers');

  return suppliers;
}

export const getCategories = async () => {
  const categories = await dashboard.get('/categories');

  return categories;
}

/**
 * Delete
 * @param { string } id
 */

export const deleteProductByID = async (id) => {
  const response = await dashboard.delete(`/product/delete/${id}`);

  return response;
}