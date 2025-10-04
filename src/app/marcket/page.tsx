'use client';
import { Filters } from '@/components/Filters';
import { useFilterStore } from '@/store/filters';
import { ProductCase } from '../../components/ProductCase';
import { Suspense, useState } from 'react';
import { FiltersAside } from '@/components/FiltersAside';
import { useProducts } from '@/hooks/useProducts';
import { Loading } from '@/components/Loading';

export default function Marcket() {
  const [openFilter, setOpenFilter] = useState(false);
  const { products } = useProducts();

  const filters = useFilterStore((state) => state.filters);

  const filteredProducts = products
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
        {filteredProducts && filteredProducts.length < 1 && (
          <h2 className='text-center text-2xl font-bold text-gray-500 w-full mt-20'>
            No matched products found
          </h2>
        )}
        <Suspense fallback={<Loading color='#48e' />}>
          <ProductCase filteredProducts={filteredProducts} />
        </Suspense>
      </div>
    </main>
  );
}
