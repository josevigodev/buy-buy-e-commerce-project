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
          className='bg-dark-gray text-white rounded-sm p-2 cursor-pointer lg:order-2'
        >
          Checkout ({itemsQty} {itemsQty > 1 ? 'items' : 'item'})
        </Link>
        <div className='flex items-center justify-between flex-1'>
          <span className='text-dark-text'>
            Total: ${totalPrice || 0} ({itemsQty} item)
          </span>
        </div>
      </section>
      <Cart />
    </main>
  );
}
