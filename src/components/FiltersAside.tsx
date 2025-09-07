'use client';
import { XIcon } from './Icons';
import { CategoryFilters } from './CategoryFilters';
import { BrandFilters } from './BrandFilters';

interface Props {
  openFilter: boolean;
  onOpenFilterAction: (value: boolean) => void;
}

export function FiltersAside({ openFilter, onOpenFilterAction }: Props) {
  const handleCloseFilter = () => {
    onOpenFilterAction(false);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-dvh z-40 flex transition-transform duration-500 ease-out lg:w-fit lg:sticky lg:z-10 lg:border-r-1 lg:border-r-gray-400 ${
          openFilter ? 'translate-x' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <aside className=' bg-light-text w-[300px] h-full p-2.5'>
          <h2 className='text-center text-xl mb-4 font-semibold text-dark-text'>
            Filters
          </h2>
          <section className='flex flex-col gap-4'>
            <BrandFilters />
            <CategoryFilters />
            <div>
              <h3 className='text-lg'>Price range</h3>
              <small>aqui va el price range</small>
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
          className={`w-full h-dvh z-30 fixed top-0 left-0 bg-alpha lg:hidden`}
        ></div>
      )}
    </>
  );
}
