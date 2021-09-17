import { dashboard } from './apis';

const token = localStorage.getItem('token');

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