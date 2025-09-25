'use client';
import Link from 'next/link';
import { HeaderHeartIcon, MenuIcon, ShoppingCartIcon, UserIcon } from './Icons';
import { useEffect, useState } from 'react';
import { SideBar } from './SideBar';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/store/user';
import { useShoppingCartStore } from '@/store/shoppingCart';
import { SearchForm } from './SearchForm';

export function Header() {
  const user = useAuthStore((state) => state.user);
  const [openSide, setOpenSide] = useState(false);
  const isLogin = usePathname() === '/log-in';
  const isSignUp = usePathname() === '/sign-up';
  const cart = useShoppingCartStore((state) => state.cart);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    setOpenSide(true);
  };

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user && user.email !== null) {
  //       setUser(user.email);
  //     } else {
  //       const fakeUser = localStorage.getItem('testUser');
  //       if (fakeUser) {
  //         const parsed = JSON.parse(fakeUser);
  //         setUser(parsed.email);
  //       }
  //     }
  //   });
  // }, [user, setUser]);

  return (
    <header className='bg-gray-600 p-3 sticky top-0 left-0 w-full z-10'>
      <div className='grid grid-cols-2 items-center gap-y-1 w-full lg:grid-cols-5'>
        <div className='flex items-center gap-3'>
          {isLogin || isSignUp || (
            <button
              aria-label='open menu'
              className='text-light-text p-1 cursor-pointer rounded-sm hover:bg-gray-800 w-fit'
              onClick={handleClick}
            >
              <MenuIcon />
            </button>
          )}
          <Link href='/'>
            <h1 className='text-2xl font-bold text-light-text select-none branch'>
              BUY-BUY
            </h1>
          </Link>
        </div>
        {isLogin || isSignUp || (
          <div className='flex items-center justify-end lg:order-2'>
            <Link
              data-test='signin-link'
              href={user ? '/my-account' : '/log-in'}
              className='flex items-center header-button text-light-text p-1 cursor-pointer px-3 rounded-sm transition-colors duration-200 ease-out hover:bg-gray-800 gap-1'
            >
              <span className='text-nowrap'>{user ? `Hello!` : 'Sign in'}</span>
              <UserIcon />
            </Link>
            <Link
              href={'/wishes'}
              className='flex items-center header-button text-light-text p-1 px-3 cursor-pointer rounded-sm transition-colors duration-200 ease-out hover:bg-gray-800 gap-1'
            >
              <span className='hidden md:inline'>Wishes</span>
              <HeaderHeartIcon />
            </Link>
            <Link
              href='/cart'
              aria-label='open cart'
              className='text-light-text p-1 header-button cursor-pointer px-3 rounded-sm transition-colors duration-200 ease-out hover:bg-gray-800 relative'
            >
              <ShoppingCartIcon />
              {cart.length > 0 && (
                <small className='absolute -top-1 right-1/9 bg-yellow-400 text-black font-bold text-md px-1.5 scale-80 flex items-center justify-center rounded-full'>
                  {mounted ? cart.length : null}
                </small>
              )}
            </Link>
          </div>
        )}
        {isLogin || isSignUp || <SearchForm />}
      </div>
      {isLogin || isSignUp || (
        <SideBar openSide={openSide} closeSideBarAction={setOpenSide} />
      )}
    </header>
  );
}
