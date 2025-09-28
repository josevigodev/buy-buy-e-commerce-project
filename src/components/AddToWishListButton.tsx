'use client';
import { useAuthStore } from '@/store/user';
import { HeartIcon } from './Icons';
import { useWishesStore } from '@/store/wishes';
import { redirect } from 'next/navigation';
import { useState } from 'react';

interface Props {
  itemId: number;
}

export const AddToWishListButton: React.FC<Props> = ({ itemId }) => {
  const [animated, setAnimated] = useState(false);
  const { user, loading } = useAuthStore();
  const addItemToWishes = useWishesStore((state) => state.addItemToWishes);
  const deleteItemFromWishes = useWishesStore(
    (state) => state.deleteItemFromWishes
  );
  const wishes = useWishesStore((state) => state.wishes);

  const isProductInWishes = wishes.find((item) => item.id === itemId);

  const handleAddItemToWishesClick = () => {
    if (!user && !loading) {
      redirect('/log-in');
    }
    if (isProductInWishes) deleteItemFromWishes({ itemId });
    if (!isProductInWishes) addItemToWishes({ itemId });
    setAnimated(true);
    setTimeout(() => {
      setAnimated(false);
    }, 200);
  };
  return (
    <button
      aria-label='add to wishes'
      onClick={handleAddItemToWishesClick}
      className='absolute top-4 right-4 p-1.5 rounded-full cursor-pointer flex items-center justify-center bg-white/20 hover:bg-white/30 transition'
    >
      <HeartIcon
        className={`size-6 text-white transition-all duration-150 ${
          isProductInWishes && 'fill-red-500 stroke-red-500'
        } ${animated ? 'scale-50' : ''}`}
      />
    </button>
  );
};
