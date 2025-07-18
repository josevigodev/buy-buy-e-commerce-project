'use client';
import {
  HeartIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
  XIcon,
} from './Icons';

interface Props {
  openSideBarAction: (value: boolean) => void;
}

export function Header({ openSideBarAction }: Props) {
  const handleClick = () => {
    openSideBarAction(true);
  };
  return (
    <header className='bg-gray-500 p-3'>
      <div className='grid grid-cols-2 gap-y-1 w-full lg:grid-cols-5'>
        <div className='flex items-center gap-3'>
          <button
            aria-label='open menu'
            className='text-light-text p-1 cursor-pointer rounded-sm hover:outline-1 w-fit'
            onClick={handleClick}
          >
            <MenuIcon />
          </button>
          <h1 className='text-2xl font-bold text-light-text select-none'>
            BUY-BUY
          </h1>
        </div>
        <div className='flex items-center place-self-end lg:order-2'>
          <button
            aria-label='sign in'
            className='flex items-center text-light-text p-1 cursor-pointer px-3 rounded-sm hover:outline-1 gap-1'
          >
            <span className='hidden md:inline text-nowrap'>Sign in</span>

            <UserIcon />
          </button>
          <button className='flex items-center text-light-text p-1 px-3 cursor-pointer rounded-sm hover:outline-1 gap-1'>
            <span className='hidden md:inline'>Wishes</span>
            <HeartIcon />
          </button>
          <button
            aria-label='open cart'
            className='text-light-text p-1 cursor-pointer px-3 rounded-sm hover:outline-1'
          >
            <ShoppingCartIcon />
          </button>
        </div>
        <form className='rounded-sm bg-amber-50 flex items-center overflow-hidden col-span-3 lg:order-1 lg:w-8/9 xl:w-full'>
          <input
            className='w-full p-1 px-2 focus-visible:outline-0 placeholder:text-placeholder'
            type='text'
            placeholder='Search'
          />
          <button
            className='px-2 text-placeholder cursor-pointer'
            type='button'
          >
            <XIcon className='size-4' />
          </button>
          <button
            className='text-light-text p-1 bg-black cursor-pointer'
            type='submit'
          >
            <SearchIcon />
          </button>
        </form>
      </div>
    </header>
  );
}
