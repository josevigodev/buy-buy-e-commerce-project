'use client';
import Image from 'next/image';
import { ShoppingCartIcon } from './Icons';
import PhoneAd from '../../public/phone-ad.webp';
import MakAd from '../../public/mak-ad.webp';
import LaptopAd from '../../public/laptop-ad.webp';
import { useIndex } from '@/hooks/useIndex';

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
  const { index } = useIndex({ length: heroImages.length });

  return (
    <section className='bg-amber-50 max-h-[500px] overflow-hidden relative'>
      <div className='flex w-full'>
        {heroImages.map(({ image, alt }, i) => (
          <Image
            key={i}
            src={image}
            alt={alt}
            className={`shrink-0 object-cover object-center pointer-events-none select-none transition-transform duration-200`}
            style={{ transform: `translateX(-${index * 100}%)` }}
          />
        ))}
      </div>

      <a
        href=''
        className='absolute bottom-1/4 left-0 right-0 text-center mx-auto w-fit px-4 py-2 bg-dark-gray text-white text-md font-semibold rounded-full shadow-xl hover:bg-white hover:text-dark-gray border-2 border-dark-gray transition duration-300 flex items-center gap-1.5 md:text-lg md:px-6 md-py-4'
      >
        <span>Shop now</span>
        <span>
          <ShoppingCartIcon className='stroke-2' />
        </span>
      </a>
    </section>
  );
}
