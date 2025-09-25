'use client';
import Image from 'next/image';
import { Rating } from './Rating';
import { usePathname } from 'next/navigation';

interface Props {
  title: string;
  image: string;
  price: number;
  qty?: number;
}

export const ProductCard: React.FC<Props> = function ({
  title = 'product',
  image = '/computer.png',
  price,
  qty,
}) {
  const isCheckout = usePathname() === '/checkout';
  const isPayment = usePathname() === '/payment';
  const isOrderConfirmed = usePathname() === '/order-confirmed';

  return (
    <article
      className={`flex rounded-sm ${
        isCheckout || isPayment || isOrderConfirmed ? '' : 'lg:flex-col'
      }`}
    >
      <div
        className={`w-1/3 p-2 pt-0 flex items-center justify-center bg-white ${
          isCheckout || isPayment || isOrderConfirmed ? '' : 'lg:w-full'
        }`}
      >
        <Image width={200} height={200} src={image} alt={title}></Image>
      </div>
      <div className='flex-1 p-2 pt-0 flex flex-col text-dark-text gap-1 md:p-3'>
        <p className='line-clamp-4 text-balance '>{title}</p>
        <div className='flex items-center gap-1 text-sm'>
          <span>4.2</span>
          <Rating size={18} rating={4.2} />
          <span>(13.1k)</span>
        </div>
        <span className='font-bold text-dark-text text-xl'>
          <strong className='font-normal text-sm'>$</strong>
          {price}
        </span>
        {(isCheckout || isPayment || isOrderConfirmed) && (
          <span className='text-xl'>x{qty}</span>
        )}
      </div>
    </article>
  );
};
