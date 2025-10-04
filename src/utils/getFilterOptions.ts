import { products } from '@/mocks/products.json';

export const getFilterOptions = (key: 'color' | 'brand' | 'category') => {
  return products.reduce((acc, product) => {
    if (!product[key]) return acc;
    if (!acc.includes(product[key])) {
      acc.push(product[key]);
    }
    return acc;
  }, [] as string[]);
};
