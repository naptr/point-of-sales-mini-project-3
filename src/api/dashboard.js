import { dashboard } from './apis';

const token = localStorage.getItem('token');

export const getProducts = async () => {
  const products = await dashboard.get('/products');

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