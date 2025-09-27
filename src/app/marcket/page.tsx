'use client';
import { Filters } from '@/components/Filters';
import { products } from '@/mocks/products.json';
import { useFilterStore } from '@/store/filters';
import { ProductCase } from '../../components/ProductCase';
import { Suspense, useState } from 'react';
import { FiltersAside } from '@/components/FiltersAside';

export default function Marcket() {
  const [openFilter, setOpenFilter] = useState(false);
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
    )
    .filter((item) =>
      filters.brand?.length ? filters.brand.includes(item.brand) : true
    )
    .filter((item) => (filters.color ? item.color === filters.color : true))
    .filter((item) => item.price >= filters.minPrice);

  return (
    <main className='flex-1 mb-20 min-h-dvh'>
      <Filters
        onOpenFilterAction={setOpenFilter}
        productsFound={filteredProducts.length}
      />
      <div className='lg:flex'>
        <FiltersAside
          openFilter={openFilter}
          onOpenFilterAction={setOpenFilter}
        />
        {filteredProducts.length < 1 && (
          <h2 className='text-center text-2xl font-bold text-gray-500 w-full mt-20'>
            No matched products found
          </h2>
        )}
        <Suspense>
          <ProductCase filteredProducts={filteredProducts} />
        </Suspense>
      </div>
    </main>
  );
}
