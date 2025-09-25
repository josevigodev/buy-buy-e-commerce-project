'use client';
import Image from 'next/image';
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
  const { index } = useIndex({ length: heroImages.length, delay: 4000 });

  return (
    <section className=' p-2 overflow-hidden relative '>
      <div className='flex w-full rounded-lg overflow-hidden max-h-[500px] max-w-[1500px] mx-auto'>
        {heroImages.map(({ image, alt }, i) => (
          <Image
            key={i}
            src={image}
            alt={alt}
            className={`shrink-0 object-cover object-top pointer-events-none select-none transition-transform duration-200`}
            style={{ transform: `translateX(-${index * 100}%)` }}
          />
        ))}
      </div>
    </section>
  );
}
