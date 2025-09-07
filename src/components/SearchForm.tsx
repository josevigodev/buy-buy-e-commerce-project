import { EventHandler, FormEvent, useEffect, useState } from 'react';
import { SearchIcon, XIcon } from './Icons';
import { useFilterStore } from '@/store/filters';

export function SearchForm() {
  const filters = useFilterStore((state) => state.filters);
  const setFilters = useFilterStore((state) => state.setFilters);
  const [search, setSearch] = useState(filters.search);

  useEffect(() => {
    setSearch(filters.search);
  }, [filters.search]);

  const handleClearSearch = () => {
    setSearch('');
  };

  const handleSubmit: EventHandler<FormEvent> = (e) => {
    e.preventDefault();
    setFilters({ key: 'search', value: search });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='rounded-sm bg-amber-50 flex items-center overflow-hidden col-span-3 lg:order-1 lg:w-8/9 xl:w-full'
    >
      <input
        className='w-full p-1 px-2 focus-visible:outline-0 placeholder:text-placeholder'
        type='text'
        placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search !== '' && (
        <button
          onClick={handleClearSearch}
          aria-label='empty input'
          className='px-2 text-placeholder cursor-pointer'
          type='button'
        >
          <XIcon className='size-4' />
        </button>
      )}
      <button
        aria-label='search'
        className='text-light-text p-1 bg-black cursor-pointer'
        type='submit'
      >
        <SearchIcon />
      </button>
    </form>
  );
}
