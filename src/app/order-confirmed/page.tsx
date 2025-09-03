'use client';

import { ProductCard } from '@/components/ProductCard';
import { useOrderStore } from '@/store/order';

export default function OrderConfirmedPage() {
  const order = useOrderStore((state) => state.order);

  return (
    <main className='mx-auto p-6 space-y-6'>
      <h1 className='text-2xl font-bold text-green-600'>✅ Order Confirmed!</h1>
      <p className='text-gray-600'>
        Your order <span className='font-medium'>{order.id}</span> has been
        placed successfully.
      </p>

      <div className='grid grid-cols-1 gap-6 xl:grid-cols-2 xl:grid-rows-2'>
        <section className='bg-white shadow rounded-2xl p-4 xl:row-span-2'>
          <h2 className='text-lg font-semibold mb-3 text-dark-text'>
            Products
          </h2>
          <ul className='space-y-3'>
            {order.products.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </ul>
        </section>

        <section className='bg-white shadow rounded-2xl p-4'>
          <h2 className='text-lg font-semibold mb-3 text-dark-text'>
            Shipping Information
          </h2>
          <p className='text-gray-700'>{order.shipping.name}</p>
          <p className='text-gray-700'>{order.shipping.address}</p>
          <p className='text-gray-700'>
            {order.shipping.city}, {order.shipping.country}
          </p>
        </section>

        <section className='bg-white shadow rounded-2xl p-4 xl:row-start-2 xl:col-start-2'>
          <h2 className='text-lg font-semibold mb-3 text-dark-text'>
            Payment Method
          </h2>
          <p className='text-gray-700'>
            💳 Card ending in{' '}
            <span className='font-medium'>{order.payment.last4}</span>
          </p>
        </section>
      </div>
    </main>
  );
}
