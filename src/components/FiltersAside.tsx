'use client';
import { XIcon } from './Icons';
import { CategoryFilters } from './CategoryFilters';
import { BrandFilters } from './BrandFilters';
import { ColorFilters } from './ColorFilters';
import { useFilterStore } from '@/store/filters';
import { useEffect, useState } from 'react';

interface Props {
  openFilter: boolean;
  onOpenFilterAction: (value: boolean) => void;
}

export function FiltersAside({ openFilter, onOpenFilterAction }: Props) {
  const filters = useFilterStore((state) => state.filters);
  const setFilters = useFilterStore((state) => state.setFilters);

  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(filters.minPrice);
  }, [filters.minPrice]);

  const handleCloseFilter = () => {
    onOpenFilterAction(false);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-30 flex transition-transform duration-500 ease-out lg:w-fit lg:z-0 lg:static ${
          openFilter ? 'translate-x' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <aside
          style={{
            scrollbarWidth: 'thin',
          }}
          className='overflow-y-scroll h-dvh lg:h-auto lg:overflow-auto w-[300px] p-2.5 pt-6 bg-white'
        >
          <section className='flex flex-col gap-9'>
            <BrandFilters />
            <CategoryFilters />
            <ColorFilters />
            <div>
              <h3 className='font-bold uppercase mb-2 text-lg px-2 w-full text-dark-text text-start'>
                Minimum price
              </h3>
              <div className='flex items-center gap-2'>
                <input
                  className='h-2 bg-gray-300 cursor-pointer rounded-full w-full appearance-none'
                  onChange={(e) =>
                    setFilters({ key: 'minPrice', value: e.target.value })
                  }
                  min={0}
                  max={1000}
                  type='range'
                  value={price}
                />
                <small className='text-lg'>${filters.minPrice}</small>
              </div>
            </div>
          </section>
        </aside>
        <button
          aria-label='close menu'
          onClick={handleCloseFilter}
          className={`h-full flex-1 cursor-pointer text-light-text p-5 flex lg:hidden`}
        >
          <XIcon />
        </button>
      </div>
      {openFilter && (
        <div
          className={`w-full h-dvh z-20 fixed top-0 left-0 bg-alpha lg:hidden`}
        ></div>
      )}
    </>
  );
}
