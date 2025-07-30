'use client';
import { Hero } from '@/components/Hero';
import { ArrowRightIcon } from '@/components/Icons';
import { ProductCard } from '@/components/ProductCard';
import { ReviewsSection } from '@/components/ReviewsSection';

export default function Home() {
  return (
    <main className='flex-1 mb-20'>
      <Hero />
      <section className=' px-3 mt-9 max-w-7xl mx-auto md:mt-15'>
        <h2 className='text-2xl text-center mb-3.5 font-semibold text-dark-text'>
          New products
        </h2>
        <div className='flex flex-col'>
          <div className='flex flex-col gap-1.5 lg:flex-row'>
            <div className='border-1 border-product-frame'>
              <ProductCard />
            </div>
            <div className='border-1 border-product-frame'>
              <ProductCard />
            </div>
            <div className='border-1 border-product-frame'>
              <ProductCard />
            </div>
            <div className='border-1 border-product-frame'>
              <ProductCard />
            </div>
          </div>
          <button className='self-end flex gap-1.5 items-center px-4 py-2 mt-1.5 bg-gray-600 text-white text-md font-semibold rounded-full shadow-xl hover:bg-white hover:text-dark-text border-2 border-gray-600 transition duration-300'>
            <span>See more</span>
            <span className='grid place-content-center'>
              <ArrowRightIcon className='size-5 stroke-2' />
            </span>
          </button>
        </div>
      </section>
      <ReviewsSection />
    </main>
  );
}
