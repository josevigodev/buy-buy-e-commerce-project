'use client';
import { useCartInfo } from '@/hooks/useCartInfo';
import { Cart } from '../../components/Cart';
import Link from 'next/link';

export default function CartPage() {
  const { totalPrice, itemsQty } = useCartInfo();

  return (
    <main className='flex-1 mb-20 px-3'>
      <section className='sticky top-0 flex flex-col border-b-1 border-b-gray-400 gap-5 py-2 bg-white lg:flex-row lg:justify-between'>
        <Link
          href='/checkout'
          aria-disabled={itemsQty < 1}
          className={`bg-dark-gray text-white rounded-sm p-2 lg:order-2 ${
            itemsQty < 1
              ? 'pointer-events-none cursor-default opacity-70'
              : 'cursor-pointer'
          }`}
        >
          Checkout ({itemsQty} {itemsQty > 1 ? 'items' : 'item'})
        </Link>
        <div className='flex items-center justify-between flex-1'>
          <span className='text-dark-text text-lg'>
            <strong>Total</strong>: ${totalPrice || '0'} ({itemsQty}{' '}
            {itemsQty > 1 ? 'items' : 'item'})
          </span>
        </div>
      </section>
      {itemsQty < 1 ? (
        <section className='flex items-center justify-center h-150'>
          <h2 className='text-2xl text-dark-gray font-semibold text-center pointer-events-none'>
            Add products to the shopping cart so you{"'"}ll see them here
          </h2>
        </section>
      ) : (
        <Cart />
      )}
    </main>
  );
}
