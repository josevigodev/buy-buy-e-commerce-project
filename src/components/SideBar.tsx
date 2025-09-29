import Link from 'next/link';
import {
  Game,
  HeaderHeartIcon,
  Headset,
  Home,
  Market,
  Phone,
  ShoppingCartIcon,
  TV,
  UserIcon,
  XIcon,
} from './Icons';
import { useAuthStore } from '@/store/user';
import { usePathname } from 'next/navigation';

interface Props {
  openSide: boolean;
  closeSideBarAction: (value: boolean) => void;
}

const categories = [
  {
    name: 'gaming',
    icon: <Game />,
  },
  {
    name: 'mobile',
    icon: <Phone />,
  },
  {
    name: 'audio',
    icon: <Headset />,
  },
  {
    name: 'tv',
    icon: <TV />,
  },
];

export function SideBar({ openSide, closeSideBarAction }: Props) {
  const user = useAuthStore((state) => state.user);
  const handleClick = () => {
    closeSideBarAction(false);
  };

  const isHome = usePathname() === '/';
  const isMarket = usePathname().includes('/marcket');
  const isCart = usePathname() === '/cart';
  const isWishes = usePathname() === '/wishes';

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-dvh z-40 flex transition-transform duration-500 ease-out ${
          openSide ? 'translate-x' : '-translate-x-full'
        }`}
      >
        <aside className=' bg-light-text w-[300px] h-full p-2.5 flex flex-col'>
          {user ? (
            <Link
              onClick={handleClick}
              href='/my-account'
              className='flex gap-2 items-center font-semibold text-lg text-dark-text p-2 px-1 pb-4 border-b-1 border-b-gray-300'
            >
              <span>
                <UserIcon className='p-2 rounded-full border-2 size-10' />
              </span>
              <span className='flex flex-col'>
                <small className='text-xl'>Hello!</small>
                <small className='text-gray-600'>{user.email}</small>
              </span>
            </Link>
          ) : (
            <Link
              onClick={handleClick}
              href='/log-in'
              className='flex gap-2 items-center font-semibold text-lg text-dark-text p-2 px-1 pb-4 border-b-1 border-b-gray-300'
            >
              <span>
                <UserIcon className='p-2 rounded-full border-2 size-10' />
              </span>
              <span>Welcome! Sign in</span>
            </Link>
          )}

          <nav className='mt-4 h-full'>
            <ul className='flex flex-col gap-2'>
              <li onClick={handleClick}>
                <Link
                  href='/'
                  className={`flex gap-2 items-center font-semibold text-lg rounded-sm p-2 px-3 ${
                    isHome
                      ? 'bg-dark-gray text-white hover:bg-dark-gray'
                      : 'text-dark-text hover:bg-gray-300 transition duration-100'
                  }`}
                >
                  <span>
                    <Home />
                  </span>
                  <span>Home</span>
                </Link>
              </li>
              <li onClick={handleClick}>
                <Link
                  href='/marcket'
                  className={`flex gap-2 items-center font-semibold text-lg rounded-sm p-2 px-3 ${
                    isMarket
                      ? 'bg-dark-gray text-white hover:bg-dark-gray'
                      : 'text-dark-text hover:bg-gray-300 transition duration-100'
                  }`}
                >
                  <span>
                    <Market />
                  </span>
                  <span>Market</span>
                </Link>
              </li>
              <li onClick={handleClick}>
                <Link
                  href='/cart'
                  className={`flex gap-2 items-center font-semibold text-lg rounded-sm p-2 px-3 ${
                    isCart
                      ? 'bg-dark-gray text-white hover:bg-dark-gray'
                      : 'text-dark-text hover:bg-gray-300 transition duration-100'
                  }`}
                >
                  <span>
                    <ShoppingCartIcon />
                  </span>
                  <span>Cart</span>
                </Link>
              </li>
              <li onClick={handleClick}>
                <Link
                  href='/wishes'
                  className={`flex gap-2 items-center font-semibold text-lg rounded-sm p-2 px-3 ${
                    isWishes
                      ? 'bg-dark-gray text-white hover:bg-dark-gray'
                      : 'text-dark-text hover:bg-gray-300 transition duration-100'
                  }`}
                >
                  <span>
                    <HeaderHeartIcon />
                  </span>
                  <span>Wishes</span>
                </Link>
              </li>
              {categories.map((category) => (
                <li onClick={handleClick} key={category.name}>
                  <Link
                    href={`/marcket?category=${category.name}`}
                    className='flex gap-2 items-center font-semibold text-lg text-dark-text rounded-sm p-2 px-3 hover:bg-gray-300 transition duration-100'
                  >
                    <span>{category.icon}</span>
                    <span className='first-letter:uppercase'>
                      {category.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <footer className='border-t-1 border-t-gray-300 pt-3 flex flex-col'>
            <h2 className='text-4xl font-bold text-dark-text select-none'>
              BUY-BUY.
            </h2>
            <p className='mb-4 text-blue-gray-900'>
              &copy; 2025 . All Rights Reserved.
            </p>
          </footer>
        </aside>
        <button
          aria-label='close menu'
          onClick={handleClick}
          className={`h-full flex-1 cursor-pointer text-light-text flex p-5 `}
        >
          <XIcon />
        </button>
      </div>
      {openSide && (
        <div className={`w-full h-dvh z-30 fixed top-0 left-0 bg-alpha`}></div>
      )}
    </>
  );
}
