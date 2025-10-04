import { products } from '@/mocks/products.json';
import { useMemo } from 'react';

export function useProducts() {
  // const response = await fetch('https://fakestoreapi.in/api/products?limit=23');
  //   const data = (await response.json()) as FakeStoreAPIResponse;
  //   const products = data.products;

  const mappedItems = useMemo(() => {
    return [...products]?.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.price,
      description: item.description,
      brand: item.brand,
      model: item.model,
      color: item.color,
      category: item.category,
      discount: item.discount,
      popular: item.popular,
      onSale: item.onSale,
    }));
  }, [products]);

  return { products: mappedItems };
}
