'use client';
import { useShoppingCartStore } from '@/store/shoppingCart';
import { PopUp } from './PopUp';
import { useEffect, useState } from 'react';
import { useAuthStore } from '@/store/user';
import Link from 'next/link';

interface Props {
  itemId: number;
  isMobile?: boolean;
}

export const AddToCartButton: React.FC<Props> = ({ itemId, isMobile }) => {
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
          className={`items-center gap-2 px-3 py-2 rounded-lg font-bold bg-gradient-to-r from-[#000] to-[#fdc700] text-white shadow-sm hover:scale-105 active:scale-100 transition `}
        >
          Add to cart
        </button>
      ) : (
        <Link
          href='/log-in'
          className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg font-bold bg-gradient-to-r from-[#000] to-[#fdc700] text-white shadow-sm hover:scale-105 active:scale-100 transition ${
            isMobile ? 'lg:hidden' : 'hidden lg:block'
          }`}
        >
          Log in to buy
        </Link>
      )}
    </>
  );
};
