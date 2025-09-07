'use client';
import { useShoppingCartStore } from '@/store/shoppingCart';

interface Props {
  itemId: number;
  isMobile?: boolean;
}

export const AddToCartButton: React.FC<Props> = ({ itemId, isMobile }) => {
  const addItem = useShoppingCartStore((state) => state.addItem);

  const handleAddToCartClick = () => {
    addItem({ itemId });
  };
  return (
    <button
      onClick={handleAddToCartClick}
      className={`w-fit px-4 py-2 bg-dark-text text-white text-md font-semibold rounded-full shadow-xl hover:bg-white hover:text-dark-text border-2 border-dark-text transition duration-300 cursor-pointer md:text-lg ${
        isMobile ? 'lg:hidden' : 'hidden lg:block'
      }`}
    >
      Add to cart
    </button>
  );
};
