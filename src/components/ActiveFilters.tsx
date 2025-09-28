import { Filters, useFilterStore } from '@/store/filters';
import { XIcon } from './Icons';
import { MouseEvent, TouchEvent, useRef, useState } from 'react';

export function ActiveFilters() {
  const [closed, setClosed] = useState('');

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

  const handleTouchStart = (e: TouchEvent) => {
    isDown = true;
    if (ul.current) {
      startX = e.touches[0].pageX - ul.current.offsetLeft;
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

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDown || !ul.current) return;
    const x = e.touches[0].pageX - ul.current.offsetLeft;
    const walk = x - startX;
    ul.current.scrollLeft = scrollLeft - walk;
  };

  const handleBrandClick = (brand: string) => {
    setTimeout(() => {
      setBrand(brand);
    }, 150);
    setClosed(brand);
    setTimeout(() => {
      setClosed('');
    }, 200);
  };

  const handleOtherClick = (filter: string, key: keyof Filters) => {
    setTimeout(() => {
      setFilters({ key, value: '' });
    }, 150);
    setClosed(filter);
    setTimeout(() => {
      setClosed('');
    }, 200);
  };
  return (
    <ul
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseLeave}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleMouseLeave}
      onTouchCancel={handleMouseLeave}
      onTouchMove={handleTouchMove}
      className='flex gap-2 items-center overflow-hidden cursor-grab'
      ref={ul}
    >
      {Object.entries(filters).map(([key, value]) => {
        if (key === 'brand' && value.length > 0) {
          return value.map((filter: string) => (
            <li
              key={filter}
              className={`select-none mt-2 text-nowrap form flex items-center gap-2  rounded-md bg-gray-200 px-3 py-1 transition-all duration-200 ${
                closed === filter ? 'opacity-0 scale-0' : ''
              }`}
            >
              {filter}
              <span onClick={() => handleBrandClick(filter)}>
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
              className={`select-none mt-2 text-nowrap form flex items-center gap-2  rounded-md bg-gray-200 px-3 py-1 transition-all duration-200 ${
                closed === value ? 'opacity-0 scale-0' : ''
              }`}
            >
              {value}
              <span onClick={() => handleOtherClick(value, key)}>
                <XIcon className='size-5 stroke-3 p-1 cursor-pointer text-white transition-colors duration-200 bg-gray-400 rounded-full hover:bg-gray-950' />
              </span>
            </li>
          );
        } else return null;
      })}
    </ul>
  );
}
