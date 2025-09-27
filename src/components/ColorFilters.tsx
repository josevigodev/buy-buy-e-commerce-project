import { useFilterStore } from '@/store/filters';
import { getFilterOptions } from '@/utils/getFilterOptions';

export function ColorFilters() {
  const filterOptions = getFilterOptions('color');

  const filters = useFilterStore((state) => state.filters);
  const setFilters = useFilterStore((state) => state.setFilters);

  const handleFilterClick = (field: string) => {
    if (filters.color === field) {
      setFilters({ key: 'color', value: '' });
    } else {
      setFilters({ key: 'color', value: field });
    }
  };

  return (
    <article className='select-none'>
      <h3 className='font-bold uppercase mb-2 text-lg px-2 w-full text-dark-text text-start'>
        Color
      </h3>
      <ul className='flex flex-wrap gap-2 text-sm'>
        {filterOptions.map((field, i) => {
          const isSelected = filters.color === field;
          return (
            <li
              onClick={() => handleFilterClick(field)}
              title={`${isSelected ? 'remove' : 'add'} ${field}`}
              aria-label={`${isSelected ? 'remove' : 'add'} ${field}`}
              key={i + field}
              className={`cursor-pointer rounded-md bg-gray-200 py-2 px-3 transition-colors duration-200 ${
                isSelected
                  ? 'text-white bg-yellow-500 hover:bg-yellow-600'
                  : 'text-black hover:bg-gray-300'
              }`}
            >
              {field}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
