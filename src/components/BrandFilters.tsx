import { useFilterStore } from '@/store/filters';

export function BrandFilters() {
  const filterOptions = {
    Brand: ['sony', 'microsoft', 'logitech G', 'urbanista', 'boat'],
  };

  const filters = useFilterStore((state) => state.filters);
  // const setFilters = useFilterStore((state) => state.setFilters);

  // const handleFilterClick = (field: string) => {
  //   const index = filters.brand?.findIndex((b) => b === field);
  //   if (index) {
  //     filters.brand?.slice(index);
  //   } else {
  //     filters.brand?.push(field);
  //   }
  // };

  return (
    <>
      {Object.entries(filterOptions).map(([key, fields]) => (
        <div key={key}>
          <h3 className='relative text-lg p-2 w-full text-dark-text text-start'>
            {key}
          </h3>
          <ul className='flex flex-wrap gap-2 text-sm'>
            {fields.map((field, i) => {
              const isSelected = filters.brand?.includes(field);
              return (
                <li
                  // onClick={() => handleFilterClick(field)}
                  key={i + field}
                  className={`cursor-pointer py-1 px-2 ${
                    isSelected
                      ? 'text-dark-text font-bold border-2 border-dark-text'
                      : 'text-medium-text border-1 border-medium-text'
                  }`}
                >
                  {field}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </>
  );
}
