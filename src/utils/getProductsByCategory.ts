import { products } from '@/mocks/products.json';

export const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category);
};
