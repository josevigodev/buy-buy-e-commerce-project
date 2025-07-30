'use client';
import { useState } from 'react';
import { FiltersAside } from './FiltersAside';

export function Filters() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenClick = () => {
    setOpenFilter(true);
  };

  return (
    <>
      <aside className='flex items-center justify-end border-b-1 border-b-gray-400 lg:hidden sticky top-0 bg-white text-dark-text'>
        <button className='flex items-center justify-center gap-1 py-2 px-4 cursor-pointer'>
          <span>Price</span>
          <span>i</span>
        </button>
        <button
          onClick={handleOpenClick}
          className='flex items-center justify-center gap-1 py-2 px-4 cursor-pointer'
        >
          <span>Filter</span>
          <span>i</span>
        </button>
      </aside>
      <FiltersAside
        openFilter={openFilter}
        onOpenFilterAction={setOpenFilter}
      />
    </>
  );
}
