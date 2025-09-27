import { EventHandler, FormEvent, useState } from 'react';
import { SearchIcon, XIcon } from './Icons';
import { useFilterStore } from '@/store/filters';
import { useRouter } from 'next/navigation';

export function SearchForm() {
  const setFilters = useFilterStore((state) => state.setFilters);
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleClearSearch = () => {
    setSearch('');
  };

  const handleSubmit: EventHandler<FormEvent> = (e) => {
    e.preventDefault();
    setFilters({ key: 'search', value: search });
    router.push(`/marcket?search=${search}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center pr-2 bg-gray-100 text-gray-700 border-2 border-transparent transition-all duration-200 outline-1 outline-transparent focus-within:border-gray-500 rounded-full col-span-3 overflow-hidden lg:order-1 lg:w-8/9 xl:w-full group search'
    >
      <button
        aria-label='search'
        title='search'
        className='text-black p-2 pl-3 cursor-pointer bg-transparent transition-all duration-200 hover:bg-black hover:text-white group-focus-within:bg-gray-300'
        type='submit'
      >
        <SearchIcon />
      </button>
      <input
        data-test='search-input'
        className='w-full p-2 px-2 focus-visible:outline-0 placeholder:text-placeholder'
        type='text'
        required
        placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search !== '' && (
        <button
          onClick={handleClearSearch}
          aria-label='empty input'
          className='p-1 text-white cursor-pointer transition-colors duration-200 bg-gray-400 rounded-full hover:bg-gray-950 form'
          type='button'
        >
          <XIcon className='size-4 stroke-3' />
        </button>
      )}
    </form>
  );
}
