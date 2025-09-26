'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AddToCartButton } from './AddToCartButton';
import { slugify } from '@/utils/slugify';
import Link from 'next/link';
import { AddToWishListButton } from './AddToWishListButton';

interface Props {
  title: string;
  image: string;
  price: number;
  qty?: number;
  id: number;
  brand: string;
  model: string;
}

export const ProductCard: React.FC<Props> = function ({
  title = 'product',
  image = '/computer.png',
  price,
  qty,
  id,
  brand,
  model,
}) {
  const isCheckout = usePathname() === '/checkout';
  const isPayment = usePathname() === '/payment';
  const isOrderConfirmed = usePathname() === '/order-confirmed';
  const isCart = usePathname() === '/cart';
  const isWishes = usePathname() === '/wishes';

  return (
    <article
      className={`max-w-sm w-full relative bg-white rounded-2xl overflow-hidden h-fit ${
        isCheckout ||
        isPayment ||
        isOrderConfirmed ||
        isCart ||
        isWishes ||
        'shadow-lg pb-10 transform transition-all hover:-translate-y-2 hover:shadow-2xl'
      } ${isCheckout || isPayment || isOrderConfirmed ? 'flex' : ''}`}
    >
      <div
        className={`relative p-2 pt-0 min-h-45 flex items-center justify-center bg-white ${
          isCheckout || isPayment || isOrderConfirmed ? 'w-1/3 p-0' : ''
        }`}
        style={{
          background:
            isCheckout || isPayment || isOrderConfirmed
              ? ''
              : 'linear-gradient(135deg, #0003 0%, #4a556533 50%, #fdc70077 100%)',
        }}
      >
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className='object-cover mix-blend-multiply h-h-auto opacity-95'
        />
        {isCheckout || isPayment || isOrderConfirmed || (
          <AddToWishListButton itemId={id} />
        )}
      </div>
      <div className='p-4 flex-1'>
        <Link href={`/products/${slugify(title)}`}>
          <h3 className='text-lg font-semibold text-gray-900 mb-1 line-clamp-4 text-balance hover:underline'>
            {title}
          </h3>
        </Link>

        <div className='flex items-center justify-between'>
          <div>
            <div className='text-sm text-gray-500'>
              {brand} • {model}
            </div>
            <div className='text-xl font-bold text-gray-900 mt-1'>${price}</div>
          </div>
          {isCheckout ||
            isPayment ||
            isOrderConfirmed ||
            isCart ||
            isWishes || (
              <div className='absolute bottom-4 right-4'>
                <AddToCartButton itemId={id} text='Add' />
              </div>
            )}
        </div>
        {(isCheckout || isPayment || isOrderConfirmed) && (
          <span className='text-xl'>x{qty}</span>
        )}
      </div>
    </article>
  );
};
