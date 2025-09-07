import { products } from '@/mocks/products.json';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { AddToCartButton } from '../../../components/AddToCartButton';
import { AddToWishListButton } from '../../../components/AddToWishListButton';
import { slugify } from '@/utils/slugify';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => slugify(p.title) === params.slug);

  if (!product) return notFound();

  const descriptionList = product.description.replace('\r', '').split('\n');

  return (
    <main className='flex-1 min-h-screen mb-20 px-3 flex flex-col md:flex-row lg:px-5 bg-white pt-3'>
      <div className='max-w-7xl mx-auto flex flex-col items-center gap-5 lg:grid lg:grid-cols-5 lg:items-start'>
        <section className='lg:hidden'>
          <h2 className='font-normal text-dark-text text-xl'>
            {product.title}
          </h2>
        </section>
        <section className='relative h-auto lg:col-span-2 lg:sticky lg:top-0'>
          <Image
            width={300}
            height={300}
            src={product.image}
            alt={product.title}
            className='h-auto w-full'
          />
          <AddToWishListButton itemId={product.id} />
        </section>
        <div className='col-span-2'>
          <section>
            <h2 className='font-bold text-dark-text text-2xl hidden lg:block'>
              {product.title}
            </h2>
          </section>
          <section className='flex justify-center mb-3'>
            <AddToCartButton itemId={product.id} isMobile />
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
          <AddToCartButton itemId={product.id} />
        </section>
      </div>
    </main>
  );
}
