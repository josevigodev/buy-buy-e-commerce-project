import { useFilterStore } from '@/store/filters';
import { ActiveFilters } from './ActiveFilters';
import { FilterIcon } from './Icons';
interface Props {
  productsFound: number;
  onOpenFilterAction: (value: boolean) => void;
}

export function Filters({ onOpenFilterAction, productsFound }: Props) {
  const resetFilters = useFilterStore((state) => state.resetFilters);
  const handleOpenClick = () => {
    onOpenFilterAction(true);
  };

  return (
    <>
      <aside className='flex flex-col p-2 shadow-md sticky top-25 lg:top-16.5 bg-white text-dark-text z-5'>
        <div className='flex items-center justify-between lg:px-4'>
          <p className='font-bold text-lg text-nowrap select-none lg:text-xl'>
            {productsFound} {productsFound <= 1 ? 'product' : 'products'} found
          </p>

          <div className='flex items-center gap-1 text-black'>
            <button
              onClick={() => resetFilters()}
              className='flex items-center rounded-md bg-gray-200 cursor-pointer justify-center gap-1 py-1 px-2 sm:py-2 sm:px-4 hover:bg-gray-300 transition-colors duration-200'
            >
              <span>Clear all</span>
            </button>
            <button
              aria-label='open filters'
              onClick={handleOpenClick}
              className='flex bg-yellow-300 rounded-md cursor-pointer items-center justify-center gap-1 py-1 px-2 sm:py-2 sm:px-4 lg:hidden transition-colors duration-200 hover:bg-yellow-400'
            >
              <span className='hidden sm:inline'>Filters</span>
              <FilterIcon className='stroke-1' />
            </button>
          </div>
        </div>
        <ActiveFilters />
      </aside>
    </>
  );
}
