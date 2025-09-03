'use client';

import products from '@/mocks/products.json';
import { useShoppingCartStore } from '@/store/shoppingCart';
import Image from 'next/image';

export default function ProductPage() {
  const product = products.products[0];
  const descriptionList = product.description.replace('\r', '').split('\n');
  const addItem = useShoppingCartStore((state) => state.addItem);

  const handleClick = () => {
    addItem({ itemId: 1 });
  };
  return (
    <main className='flex-1 min-h-screen mb-20 px-3 flex flex-col md:flex-row lg:px-15 bg-white pt-3'>
      <div className='flex flex-col items-center gap-5 lg:grid lg:grid-cols-4 lg:items-start'>
        <section className='lg:hidden'>
          <h2 className='font-normal text-dark-text text-xl'>
            {product.title}
          </h2>
        </section>
        <section className='flex-auto'>
          <Image
            width={300}
            height={300}
            src={product.image}
            alt={product.title}
          />
        </section>
        <div className='col-span-2'>
          <section>
            <h2 className='font-bold text-dark-text text-2xl hidden lg:block'>
              {product.title}
            </h2>
          </section>
          <section className='border-t-1 border-t-gray-400 pt-3'>
            <h3 className='text-xl text-dark-text font-bold mb-3'>
              Product information
            </h3>
            <article className='grid grid-cols-2'>
              <span className='font-bold text-dark-text'>Brand</span>
              <span>{product.brand}</span>
              <span className='font-bold text-dark-text'>Model</span>
              <span>{product.model}</span>
              <span className='font-bold text-dark-text'>Color</span>
              <span>{product.color}</span>
              <ul className='col-span-2 mt-2'>
                {descriptionList.map((item, index) => (
                  <li className='list-inside list-disc text-pretty' key={index}>
                    {item}.
                  </li>
                ))}
              </ul>
            </article>
          </section>
        </div>
        <section>
          <button
            onClick={handleClick}
            className='text-center w-fit px-4 py-2 bg-dark-gray text-white text-md font-semibold rounded-full shadow-xl hover:bg-white hover:text-dark-gray border-2 border-dark-gray transition duration-300 cursor-pointer md:text-lg md:px-6 md-py-4'
          >
            Add to cart
          </button>
        </section>
      </div>
    </main>
  );
}
