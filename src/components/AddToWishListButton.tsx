'use client';
import { HeartIcon } from './Icons';
import { useWishesStore } from '@/store/wishes';

interface Props {
  itemId: number;
}

export const AddToWishListButton: React.FC<Props> = ({ itemId }) => {
  const addItemToWishes = useWishesStore((state) => state.addItemToWishes);
  const deleteItemFromWishes = useWishesStore(
    (state) => state.deleteItemFromWishes
  );
  const wishes = useWishesStore((state) => state.wishes);

  const isProductInWishes = wishes.find((item) => item.id === itemId);

  const handleAddItemToWishesClick = () => {
    if (isProductInWishes) deleteItemFromWishes({ itemId });
    if (!isProductInWishes) addItemToWishes({ itemId });
  };
  return (
    <button
      aria-label='add to wishes'
      onClick={handleAddItemToWishesClick}
      className='absolute top-0 right-0 cursor-pointer'
    >
      <HeartIcon
        className={`stroke-dark-gray w-8 h-8 ${
          isProductInWishes && 'fill-red-500 stroke-red-500'
        }`}
      />
    </button>
  );
};
