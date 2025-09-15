'use client';
import { useCartInfo } from '@/hooks/useCartInfo';
import { Cart } from '../../components/Cart';
import Link from 'next/link';
import ProtectedClient from '@/components/ProtectedClient';

export default function CartPage() {
  const { totalPrice, itemsQty } = useCartInfo();
  const disabled = 'opacity-50 pointer-events-none';

  return (
    <main className='flex-1 mb-20 px-3 min-h-dvh'>
      <ProtectedClient>
        <section className='sticky top-0 flex border-b-1 border-b-gray-400 gap-5 py-2 bg-white lg:flex-row lg:justify-between'>
          <div className='flex items-center justify-between flex-1'>
            <span className='text-dark-text text-lg'>
              <strong>Total</strong>: ${totalPrice || '0'} ({itemsQty}{' '}
              {itemsQty > 1 ? 'items' : 'item'})
            </span>
          </div>
          <Link
            data-test='checkout'
            href='/checkout'
            aria-disabled={itemsQty < 1}
            className={`bg-dark-gray text-white rounded-sm p-2 ${
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
