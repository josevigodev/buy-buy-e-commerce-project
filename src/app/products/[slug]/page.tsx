import { products } from '@/mocks/products.json';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { slugify } from '@/utils/slugify';
import { ProductCard } from '@/components/ProductCard';
import { AddToWishListButton } from '@/components/AddToWishListButton';
import { AddToCartButton } from '@/components/AddToCartButton';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => slugify(p.title) === slug);

  if (!product) return notFound();

  const descriptionList = product.description.replace('\r', '').split('\n');

  return (
    <main className='flex-1 min-h-screen mb-20 px-3 lg:px-5 bg-white pt-3'>
      <div className='max-w-7xl mx-auto flex flex-col items-center gap-5 lg:grid lg:grid-cols-5 lg:items-start'>
        <section className='lg:hidden'>
          <h2 className='font-normal text-dark-text text-xl'>
            {product.title}
          </h2>
        </section>
        <section className='relative h-auto lg:col-span-2 lg:sticky lg:top-15'>
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
            <h2 className='text-dark-text text-2xl hidden lg:block'>
              {product.title}
            </h2>
          </section>
          <section className='flex justify-center mb-3 lg:hidden'>
            <AddToCartButton itemId={product.id} text='Add' />
          </section>
          <section className='border-t-1 border-t-gray-400 pt-3'>
            <p className='font-bold mb-4 text-dark-text text-2xl lg:text-3xl'>
              <strong className='font-normal text-sm lg:text-lg'>$</strong>
              {product.price}
            </p>
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
        <section className='hidden lg:block'>
          <AddToCartButton itemId={product.id} text='Add to cart' />
        </section>
      </div>
      <section className='max-w-7xl mx-auto border-t-1 border-t-gray-400 pt-3 mt-20'>
        <h3 className='text-2xl font-bold text-dark-text'>Related products</h3>
        <ul className='grid gap-2 grid-cols-2 lg:grid-cols-4 flex-1 mt-5 lg:pl-3'>
          {products.map((item) => {
            if (product.category !== item.category || product.id === item.id)
              return null;

            return (
              <li key={item.id}>
                <ProductCard {...item} />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
