'use client';
import { useCartInfo } from '@/hooks/useCartInfo';
import { Cart } from '../../components/Cart';
import Link from 'next/link';
import ProtectedClient from '@/components/ProtectedClient';

export default function CartPage() {
  const { totalPrice, itemsQty } = useCartInfo();
  const disabled = 'opacity-50 pointer-events-none';

  return (
    <main className='flex-1 mb-20 min-h-dvh'>
      <ProtectedClient>
        <section className='sticky top-26 lg:top-16.5 z-5 flex items-center shadow-md gap-5 px-3 py-2 bg-white lg:flex-row lg:justify-between'>
          <div className='flex items-center justify-between flex-1'>
            <article className='text-dark-text flex gap-1 flex-wrap text-lg'>
              <span>
                <strong>Total</strong>: ${totalPrice || '0'}
              </span>
              <span>
                ({itemsQty} {itemsQty > 1 ? 'items' : 'item'})
              </span>
            </article>
          </div>
          <Link
            data-test='checkout'
            href='/checkout'
            aria-disabled={itemsQty < 1}
            className={`items-center flex gap-2 px-3 py-2 rounded-lg font-bold bg-[#fdc700] text-black shadow-sm hover:scale-105 active:scale-100 transition  ${
              itemsQty < 1 && disabled
            }`}
          >
            Checkout ({itemsQty} {itemsQty > 1 ? 'items' : 'item'})
          </Link>
        </section>
        {itemsQty < 1 ? (
          <section className='flex items-center justify-center h-150'>
            <h2 className='text-2xl text-dark-gray font-semibold text-center pointer-events-none'>
              Add products to the shopping cart to see them here
            </h2>
          </section>
        ) : (
          <Cart />
        )}
      </ProtectedClient>
    </main>
  );
}
