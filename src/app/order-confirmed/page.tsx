'use client';

import { ProductCard } from '@/components/ProductCard';
import ProtectedClient from '@/components/ProtectedClient';
import { useOrderStore } from '@/store/order';

export default function OrderConfirmedPage() {
  const order = useOrderStore((state) => state.order);
  const totalPrice = order.products.reduce((total, product) => {
    if (product.qty) {
      return total + product.price * product.qty;
    } else {
      return total + product.price;
    }
  }, 0);

  return (
    <main className='mx-auto p-6 space-y-6 min-h-dvh'>
      <ProtectedClient>
        <h1 className='text-2xl font-bold text-green-600'>
          ✅ Order Confirmed!
        </h1>
        <p className='text-gray-600'>
          Your order <span className='font-medium'>{order.id}</span> has been
          placed successfully.
        </p>

        <div className='bg-white shadow rounded-2xl p-4 flex flex-col max-w-4xl gap-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 border-b-3 border-b-gray-300'>
            <section className='bg-white h-fit p-4'>
              <h2 className='text-lg font-semibold mb-3 text-dark-text'>
                Shipping Information
              </h2>
              <p className='text-gray-700'>{order.shipping.name}</p>
              <p className='text-gray-700'>{order.shipping.address}</p>
              <p className='text-gray-700'>
                {order.shipping.city}, {order.shipping.country}
              </p>
            </section>

            <section className='bg-white p-4'>
              <h2 className='text-lg font-semibold mb-3 text-dark-text'>
                Payment Method
              </h2>
              <p className='text-gray-700'>
                💳 Card ending in{' '}
                <span className='font-medium'>{order.payment.last4}</span>
              </p>
            </section>
          </div>
          <section>
            <div className='flex justify-between px-10'>
              <h2 className='text-lg text-center font-semibold mb-3 text-dark-text'>
                Products
              </h2>
              <h2 className='text-lg text-center font-semibold mb-3 text-dark-text'>
                Total: ${totalPrice}
              </h2>
            </div>
            <ul className='gap-2 grid grid-cols-2 px-3 md:grid-cols-3 xl:grid-cols-4'>
              {order.products.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
            </ul>
          </section>
        </div>
      </ProtectedClient>
    </main>
  );
}
