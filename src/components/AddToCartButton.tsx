'use client';
import { useShoppingCartStore } from '@/store/shoppingCart';
import { PopUp } from './PopUp';
import { useEffect, useState } from 'react';

interface Props {
  itemId: number;
  isMobile?: boolean;
}

export const AddToCartButton: React.FC<Props> = ({ itemId, isMobile }) => {
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
      <button
        onClick={handleAddToCartClick}
        className={`w-fit px-4 py-2 bg-dark-text text-white text-md font-semibold rounded-full shadow-xl hover:bg-white hover:text-dark-text border-2 border-dark-text transition duration-300 cursor-pointer md:text-lg ${
          isMobile ? 'lg:hidden' : 'hidden lg:block'
        }`}
      >
        Add to cart
      </button>
    </>
  );
};
