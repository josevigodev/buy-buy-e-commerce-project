'use client';
import { Filters } from '@/components/Filters';
import { products } from '@/mocks/products.json';
import { useFilterStore } from '@/store/filters';
import { ProductCase } from '../../components/ProductCase';
import { Suspense } from 'react';

export default function Marcket() {
  // const response = await fetch('https://fakestoreapi.in/api/products?limit=23');
  // const data = (await response.json()) as FakeStoreAPIResponse;
  // const products = data.products;

  const mappedItems = [...products]?.map((item) => ({
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

  const filters = useFilterStore((state) => state.filters);

  const filteredProducts = mappedItems
    .filter((item) =>
      filters.search
        ? item.title.toLowerCase().includes(filters.search.toLowerCase())
        : true
    )
    .filter((item) =>
      filters.category ? item.category === filters.category : true
    );

  return (
    <main className='flex-1 mb-20 min-h-dvh px-3 lg:flex'>
      <Filters />
      {filteredProducts.length < 1 && (
        <h2 className='text-center text-2xl font-bold text-gray-500 w-full mt-20'>
          No matched products found
        </h2>
      )}
      <Suspense>
        <ProductCase filteredProducts={filteredProducts} />
      </Suspense>
    </main>
  );
}
