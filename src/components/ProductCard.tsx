'use client';
import Image from 'next/image';
import { Rating } from './Rating';
import { Product } from '@/types/fakeStoreApi';
import { useShoppingCartStore } from '@/store/shoppingCart';
import { usePathname } from 'next/navigation';

export const ProductCard: React.FC<Product> = function ({
  title = 'product',
  image = '/computer.png',
  price,
  item,
}) {
  const isShoppingCart = usePathname() === '/cart';
  const addItem = useShoppingCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ item: item });
  };

  return (
    <article className='flex rounded-sm lg:flex-col'>
      <div className='w-1/3 p-2 pt-0 flex items-center justify-center bg-white lg:w-full'>
        <Image width={200} height={200} src={image} alt={title}></Image>
      </div>
      <div className='flex-1 p-2 pt-0 flex flex-col text-dark-text gap-1 md:p-3'>
        <p className='line-clamp-4 text-balance '>{title}</p>
        <div className='flex items-center gap-1 text-sm'>
          <span>4.2</span>
          <Rating size={18} rating={4.2} />
          <span>(13.1k)</span>
        </div>
        <span className='text-amber-700 text-lg font-bold'>
          <strong className='font-normal text-md mr-0.5'>$</strong>
          {price}
        </span>
        {isShoppingCart ?? (
          <button
            className='className=absolute bottom-1/4 left-0 right-0 text-center mx-auto w-fit px-4 py-2 bg-dark-gray text-white text-md font-semibold rounded-full shadow-xl hover:bg-white hover:text-dark-gray border-2 border-dark-gray transition duration-300 flex items-center gap-1.5 md:text-lg md:px-6 md-py-4'
            onClick={handleAddToCart}
          >
            add to cart
          </button>
        )}
      </div>
    </article>
  );
};
