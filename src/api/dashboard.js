import { dashboard } from './apis';

const token = localStorage.getItem('token');

export const getProductsData = async () => {
  const products = await dashboard.get('/products', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  return products.data;
}