'use client';
import Image from 'next/image';
import { ShoppingCartIcon } from './Icons';
import PhoneAd from '../../public/phone-ad.webp';
import MakAd from '../../public/mak-ad.webp';
import LaptopAd from '../../public/laptop-ad.webp';
import { useEffect, useState } from 'react';

const heroImages = [
  {
    image: PhoneAd,
    alt: 'Phone',
  },
  {
    image: MakAd,
    alt: 'Mac Book',
  },
  {
    image: LaptopAd,
    alt: 'Laptop',
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const imageQuantity = heroImages.length;

    const imageInterval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex < imageQuantity - 1 ? prevIndex + 1 : 0
      );
    }, 2000);

    return () => {
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <section className='bg-amber-50 max-h-[500px] overflow-hidden relative'>
      <div className='flex w-full'>
        {heroImages.map(({ image, alt }, i) => (
          <Image
            key={i}
            src={image}
            alt={alt}
            className={`shrink-0 object-cover object-center pointer-events-none select-none transition-transform duration-200 -translate-x-[${
              index * 100
            }%]`}
          />
        ))}
      </div>

      <a
        href=''
        className='absolute bg-amber-50 bottom-1/4 left-0 right-0 text-center mx-auto w-fit py-2 px-3 flex items-center gap-1 rounded-sm border-amber-600 border-2'
      >
        <span>Shop now</span>
        <span>
          <ShoppingCartIcon className='stroke-2' />
        </span>
      </a>
    </section>
  );
}
