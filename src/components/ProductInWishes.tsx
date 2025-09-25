'use client';
import { useShoppingCartStore } from '@/store/shoppingCart';
import { useWishesStore } from '@/store/wishes';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  itemId: number;
}

export const ProductInWishes: React.FC<Props> = ({ children, itemId }) => {
  const addItem = useShoppingCartStore((state) => state.addItem);
  const deleteItemFromWishes = useWishesStore(
    (state) => state.deleteItemFromWishes
  );

  const handleAddItemToWishesClick = () => {
    addItem({ itemId });
    deleteItemFromWishes({ itemId });
  };

  const handleDeleteItemFromWishesClick = () => {
    deleteItemFromWishes({ itemId });
  };
  return (
    <div className=' bg-white pb-3 rounded-2xl overflow-hidden shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-2xl'>
      {children}
      <div className='flex items-center gap-2 px-3 text-dark-text justify-end lg:justify-center'>
        <div className='flex rounded-sm border-1 border-gray-400'></div>
        <button
          onClick={handleAddItemToWishesClick}
          className='cursor-pointer rounded-sm border-1 border-gray-400 bg-white p-1 px-3 text-nowrap'
        >
          Add to cart
        </button>
        <button
          onClick={handleDeleteItemFromWishesClick}
          className='cursor-pointer rounded-sm border-1 border-gray-400 bg-white p-1 px-3'
        >
          Delete
        </button>
      </div>
    </div>
  );
};
