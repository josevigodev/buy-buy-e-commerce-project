'use client';
import { Hero } from '@/components/Hero';
import { ReviewsSection } from '@/components/ReviewsSection';
import { products } from '@/mocks/products.json';
import { slugify } from '@/utils/slugify';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '../components/Icons';
import { useState } from 'react';

const categories = [
  {
    category: 'gaming',
    title: 'Want to play?',
  },
  {
    category: 'mobile',
    title: 'Grab your phone',
  },
  {
    category: 'audio',
    title: 'Listen to music',
  },
  {
    category: 'tv',
    title: 'Watch TV',
  },
];

export default function Home() {
  const [hover, setHover] = useState('');
  const productsByCategory = (category: string) => {
    return products.filter((product) => product.category === category);
  };

  const handleMouseOver = (category: string) => {
    setHover(category);
  };

  return (
    <main className='flex-1 mb-20'>
      <Hero />
      <section className='px-3 max-w-[1500px] mx-auto grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-10'>
        {categories.map((article) => (
          <article
            key={article.category}
            onMouseOver={() => handleMouseOver(article.category)}
            onMouseLeave={() => handleMouseOver('')}
            className={`animated-background w-full flex flex-col gap-4 bg-gradient-to-br from-blue-200 to-white rounded-lg p-4 pb-30 relative transition-transform duration-150 ${
              article.category === hover ? 'md:scale-105' : ''
            }`}
          >
            <h2 className='text-2xl font-semibold mb-4 select-none'>
              {article.title}
            </h2>
            <div className='grid grid-cols-2 gap-4'>
              {productsByCategory(article.category)
                .slice(1, 5)
                .map((product) => (
                  <div key={product.id} className='bg-white p-2 rounded-lg'>
                    <Link href={`/products/${slugify(product.title)}`}>
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={200}
                        height={200}
                        className='w-full object-cover object-center'
                      />
                    </Link>
                  </div>
                ))}
            </div>
            <Link
              href={`/marcket?category=${article.category}`}
              className=' w-fit px-4 py-2 backdrop-brightness-200 text-black text-md transition-colors duration-150 cursor-pointer md:text-lg absolute bottom-4 right-4 rounded-full flex items-center gap-1 hover:bg-white'
            >
              See more of this <ArrowRightIcon />
            </Link>
          </article>
        ))}
      </section>
      <ReviewsSection />
    </main>
  );
}

const sadf =
  ' hover:border-gray-600 hover:text-dark-text hover:shadow-md transition duration-200';
