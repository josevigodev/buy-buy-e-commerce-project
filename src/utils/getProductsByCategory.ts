import { useProducts } from '@/hooks/useProducts';

export const getProductsByCategory = (category: string) => {
  const { products } = useProducts();
  return products.filter((product) => product.category === category);
};
