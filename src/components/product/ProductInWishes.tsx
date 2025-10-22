'use client';
import { useShoppingCartStore } from '@/store/shoppingCart';
import { useWishesStore } from '@/store/wishes';
import { ReactNode, useState } from 'react';
import { ShoppingCartIcon, Trash } from '@/components/ui/Icons';
import { ConfirmPopUp } from '@/components/ui/ConfirmPopUp';

interface Props {
  children: ReactNode;
  itemId: number;
}

export const ProductInWishes: React.FC<Props> = ({ children, itemId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useShoppingCartStore((state) => state.addItem);
  const deleteItemFromWishes = useWishesStore(
    (state) => state.deleteItemFromWishes
  );

  const handleAddToCartClick = () => {
    addItem({ itemId });
    deleteItemFromWishes({ itemId });
  };

  return (
    <>
      <div className=' bg-white pb-3 rounded-2xl overflow-hidden shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-2xl'>
        {children}
        <div className='flex items-center gap-2 px-3 text-dark-text justify-end lg:justify-center'>
          <div className='flex rounded-sm border-1 border-gray-400'></div>
          <button
            onClick={handleAddToCartClick}
            className='items-center cursor-pointer flex gap-2 px-3 py-2 rounded-lg font-bold bg-[#fdc700] text-black shadow-sm hover:scale-105 active:scale-100 transition'
          >
            <ShoppingCartIcon /> Add
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className='flex rounded-md px-4 py-2 cursor-pointer overflow-hidden border-1 border-gray-400 hover:bg-gray-200 hover:text-red-600 hover:border-red-600 transition-colors duration-200'
          >
            <Trash className='size-6' />
            <span>Delete</span>
          </button>
        </div>
      </div>
      <ConfirmPopUp
        buttonText='Delete'
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        confirmFunction={() => deleteItemFromWishes({ itemId })}
        text='Are you sure you want to remove this item from your wish list?'
      />
    </>
  );
};
