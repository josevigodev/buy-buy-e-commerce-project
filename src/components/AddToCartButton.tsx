'use client';
import { useShoppingCartStore } from '@/store/shoppingCart';
import { PopUp } from './PopUp';
import { useEffect, useState } from 'react';
import { useAuthStore } from '@/store/user';
import Link from 'next/link';
import { ShoppingCartIcon, UserIcon } from './Icons';

interface Props {
  itemId: number;
  text: string;
}

export const AddToCartButton: React.FC<Props> = ({ itemId, text }) => {
  const user = useAuthStore((state) => state.user);
  const [showPopUp, setShowPopUp] = useState(false);
  const addItem = useShoppingCartStore((state) => state.addItem);

  const handleAddToCartClick = () => {
    addItem({ itemId });
    setShowPopUp(true);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      if (showPopUp) {
        setShowPopUp(false);
      }
    }, 2000);

    return () => clearTimeout(id);
  }, [showPopUp]);

  return (
    <>
      {showPopUp && <PopUp text='Product added to shopping cart' />}
      {user ? (
        <button
          data-test='add-to-cart-button'
          onClick={handleAddToCartClick}
          className={`items-center flex gap-2 px-3 py-2 rounded-lg font-bold bg-[#fdc700] text-black shadow-sm hover:scale-105 active:scale-100 transition `}
        >
          <ShoppingCartIcon /> {text}
        </button>
      ) : (
        <Link
          href='/log-in'
          className='inline-flex items-center gap-2 px-3 py-2 rounded-lg font-bold bg-[#fdc700] text-black shadow-sm hover:shadow-lg hover:brightness-110 active:brightness-100 transition'
        >
          <UserIcon />
          Log in
        </Link>
      )}
    </>
  );
};
