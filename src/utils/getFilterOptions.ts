import { useProducts } from '@/hooks/useProducts';

export const getFilterOptions = (key: 'color' | 'brand' | 'category') => {
  const { products } = useProducts();
  return products.reduce((acc, product) => {
    if (!product[key]) return acc;
    if (!acc.includes(product[key])) {
      acc.push(product[key]);
    }
    return acc;
  }, [] as string[]);
};
