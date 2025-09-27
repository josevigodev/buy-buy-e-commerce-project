import { useFilterStore } from '@/store/filters';
import { XIcon } from './Icons';
import { MouseEvent, useRef } from 'react';

export function ActiveFilters() {
  const filters = useFilterStore((state) => state.filters);
  const setFilters = useFilterStore((state) => state.setFilters);
  const setBrand = useFilterStore((state) => state.setBrand);
  const ul = useRef<HTMLUListElement>(null);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e: MouseEvent) => {
    isDown = true;
    if (ul.current) {
      startX = e.pageX - ul.current.offsetLeft;
      scrollLeft = ul.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDown || !ul.current) return;
    e.preventDefault();
    const x = e.pageX - ul.current.offsetLeft;
    const walk = x - startX;
    ul.current.scrollLeft = scrollLeft - walk;
  };
  return (
    <ul
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseLeave}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className='flex gap-2 items-center overflow-hidden cursor-grab'
      ref={ul}
    >
      {Object.entries(filters).map(([key, value]) => {
        if (key === 'brand' && value.length > 0) {
          return value.map((filter: string) => (
            <li
              key={filter}
              className='select-none text-nowrap form flex items-center gap-2  rounded-md bg-gray-200 px-3 py-1 transition-colors duration-200 '
            >
              {filter}
              <span onClick={() => setBrand(filter)}>
                <XIcon className='size-5 stroke-3 p-1 text-white transition-colors duration-200 bg-gray-400 rounded-full cursor-pointer hover:bg-gray-950' />
              </span>
            </li>
          ));
        } else if (
          (key === 'category' && value) ||
          (key === 'color' && value)
        ) {
          return (
            <li
              key={value}
              className='select-none form text-nowrap flex items-center justify-center gap-2  rounded-md bg-gray-200 px-3 py-1 transition-colors duration-200 '
            >
              {value}
              <span onClick={() => setFilters({ key, value: '' })}>
                <XIcon className='size-5 stroke-3 p-1 cursor-pointer text-white transition-colors duration-200 bg-gray-400 rounded-full hover:bg-gray-950' />
              </span>
            </li>
          );
        } else return null;
      })}
    </ul>
  );
}
