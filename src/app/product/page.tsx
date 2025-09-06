'use client';

import products from '@/mocks/products.json';
import { useShoppingCartStore } from '@/store/shoppingCart';
import Image from 'next/image';
import { HeartIcon } from '../../components/Icons';
import { useWishesStore } from '@/store/wishes';

export default function ProductPage() {
  const product = products.products[0];
  const descriptionList = product.description.replace('\r', '').split('\n');
  const addItem = useShoppingCartStore((state) => state.addItem);
  const addItemToWishes = useWishesStore((state) => state.addItemToWishes);
  const deleteItemFromWishes = useWishesStore(
    (state) => state.deleteItemFromWishes
  );
  const wishes = useWishesStore((state) => state.wishes);

  const handleAddToCartClick = () => {
    addItem({ itemId: 1 });
  };

  const isProductInWishes = wishes.find((item) => item.id === 1);

  const handleAddItemToWishesClick = () => {
    if (isProductInWishes) deleteItemFromWishes({ itemId: 1 });
    if (!isProductInWishes) addItemToWishes({ itemId: 1 });
  };

  return (
    <main className='flex-1 min-h-screen mb-20 px-3 flex flex-col md:flex-row lg:px-5 bg-white pt-3'>
      <div className='flex flex-col items-center gap-5 lg:grid lg:grid-cols-4 lg:items-start'>
        <section className='lg:hidden'>
          <h2 className='font-normal text-dark-text text-xl'>
            {product.title}
          </h2>
        </section>
        <section className='relative'>
          <Image
            width={300}
            height={300}
            src={product.image}
            alt={product.title}
          />
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
        </section>
        <div className='col-span-2'>
          <section>
            <h2 className='font-bold text-dark-text text-2xl hidden lg:block'>
              {product.title}
            </h2>
          </section>
          <section className='flex justify-center mb-3'>
            <button
              onClick={handleAddToCartClick}
              className='w-fit px-4 py-2 bg-dark-text text-white text-md font-semibold rounded-full shadow-xl hover:bg-white hover:text-dark-text border-2 border-dark-text transition duration-300 cursor-pointer md:text-lg md:px-6 md-py-4 lg:hidden'
            >
              Add to cart
            </button>
          </section>
          <section className='border-t-1 border-t-gray-400 pt-3'>
            <h3 className='text-xl lg:text-2xl text-dark-text font-bold mb-3'>
              Product information
            </h3>
            <article className='grid grid-cols-2  max-w-sm'>
              <span className='font-bold text-dark-text'>Brand</span>
              <span>{product.brand}</span>
              <span className='font-bold text-dark-text'>Model</span>
              <span>{product.model}</span>
              <span className='font-bold text-dark-text'>Color</span>
              <span>{product.color}</span>
            </article>
            <ul className='col-span-2 mt-2 lg:text-lg'>
              {descriptionList.map((item, index) => (
                <li className='list-inside list-disc text-pretty' key={index}>
                  {item}.
                </li>
              ))}
            </ul>
          </section>
        </div>
        <section>
          <button
            onClick={handleAddToCartClick}
            className='w-fit px-4 py-2 bg-dark-text text-white text-md font-semibold rounded-full shadow-xl hover:bg-white hover:text-dark-text border-2 border-dark-text transition duration-300 cursor-pointer md:text-lg md:px-6 md-py-4 hidden lg:block'
          >
            Add to cart
          </button>
        </section>
      </div>
    </main>
  );
}
