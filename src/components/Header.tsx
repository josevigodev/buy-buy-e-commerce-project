'use client';
import Link from 'next/link';
import {
  HeartIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
  XIcon,
} from './Icons';
import { useState } from 'react';
import { SideBar } from './SideBar';
import { usePathname } from 'next/navigation';

export function Header() {
  const [openSide, setOpenSide] = useState(false);
  const isLogin = usePathname() === '/log-in';

  const handleClick = () => {
    setOpenSide(true);
  };
  return (
    <header className='bg-gray-600 p-3'>
      <div className='grid grid-cols-2 gap-y-1 w-full lg:grid-cols-5'>
        <div className='flex items-center gap-3'>
          {isLogin || (
            <button
              aria-label='open menu'
              className='text-light-text p-1 cursor-pointer rounded-sm hover:outline-1 w-fit'
              onClick={handleClick}
            >
              <MenuIcon />
            </button>
          )}
          <Link href='/'>
            <h1 className='text-2xl font-bold text-light-text select-none'>
              BUY-BUY
            </h1>
          </Link>
        </div>
        {isLogin || (
          <div className='flex items-center place-self-end lg:order-2'>
            <Link
              href='/log-in'
              className='flex items-center text-light-text p-1 cursor-pointer px-3 rounded-sm hover:outline-1 gap-1'
            >
              <span className='hidden md:inline text-nowrap'>Sign in</span>
              <UserIcon />
            </Link>
            <button className='flex items-center text-light-text p-1 px-3 cursor-pointer rounded-sm hover:outline-1 gap-1'>
              <span className='hidden md:inline'>Wishes</span>
              <HeartIcon />
            </button>
            <Link
              href='/cart'
              aria-label='open cart'
              className='text-light-text p-1 cursor-pointer px-3 rounded-sm hover:outline-1 relative'
            >
              <ShoppingCartIcon />
              <small className='absolute -top-1 right-1/9 bg-black px-1.5 scale-80 flex items-center justify-center rounded-full'>
                1
              </small>
            </Link>
          </div>
        )}
        {isLogin || (
          <form className='rounded-sm bg-amber-50 flex items-center overflow-hidden col-span-3 lg:order-1 lg:w-8/9 xl:w-full'>
            <input
              className='w-full p-1 px-2 focus-visible:outline-0 placeholder:text-placeholder'
              type='text'
              placeholder='Search'
            />
            <button
              aria-label='empty input'
              className='px-2 text-placeholder cursor-pointer'
              type='button'
            >
              <XIcon className='size-4' />
            </button>
            <button
              aria-label='search'
              className='text-light-text p-1 bg-black cursor-pointer'
              type='submit'
            >
              <SearchIcon />
            </button>
          </form>
        )}
      </div>
      {isLogin || (
        <SideBar openSide={openSide} closeSideBarAction={setOpenSide} />
      )}
    </header>
  );
}
