'use client';
import { useEffect, useState } from 'react';
import ProtectedClient from '@/components/ProtectedClient';
import { SignOutButton } from '@/components/SignOutButton';
import { useAuthStore } from '@/store/user';
import { getOrders, UserOrder } from '@/services/order';
import { Loading } from '@/components/ui/Loading';
import Image from 'next/image';

interface DBOrder extends UserOrder {
  id: string;
}

export default function MyAccountPage() {
  const user = useAuthStore((state) => state.user);
  const [orders, setOrders] = useState<DBOrder[]>();

  useEffect(() => {
    if (user) {
      const orders = getOrders(user?.uid);
      orders.then((res) => setOrders(res));
    }
  }, [user]);

  return (
    <main className='flex-1 min-h-screen mb-20 px-3 lg:px-5 bg-white pt-3'>
      <ProtectedClient>
        <div className='flex justify-between items-center mb-6 max-w-7xl mx-auto'>
          <h1 className='text-3xl font-bold'>My Account</h1>
          <SignOutButton />
        </div>
        <div className='flex flex-col md:flex-row gap-3.5 mx-auto max-w-7xl'>
          <section className='mb-8 bg-gray-100 p-4 rounded-xl h-fit md:order-1'>
            <h2 className='text-xl font-semibold mb-2'>Account Info</h2>
            <p className='text-gray-700'>Email: {user?.email}</p>
          </section>
          <section className='bg-gray-100 p-4 rounded-xl max-w-2xl flex-1'>
            <h2 className='text-xl font-semibold mb-4'>My Orders</h2>
            {!orders ? (
              <Loading color='bg-blue-500' />
            ) : orders.length > 0 ? (
              <ul className='space-y-4'>
                {orders.map((order) => (
                  <li
                    key={order.id}
                    className='p-4 rounded-lg bg-white shadow-md'
                  >
                    <div className='flex justify-between items-center'>
                      <p className='text-sm text-gray-500'>
                        Order ID: {order.id}
                      </p>
                      <p className='text-lg font-bold'>Total: ${order.total}</p>
                    </div>
                    <p className='text-sm text-gray-700 font-semibold '>
                      Status:{' '}
                      <strong className='text-green-600'>{order.status}</strong>
                    </p>
                    <div className='mt-2 space-y-1'>
                      {order.items?.map((item) => (
                        <div
                          key={item.id}
                          className='flex gap-2 items-center justify-between text-sm'
                        >
                          <Image
                            src={item.image}
                            alt='item image'
                            width={100}
                            height={100}
                          />
                          <span className='font-semibold'>
                            {item.title} <strong>x{item.qty}</strong>
                          </span>
                          <span>${item.price}</span>
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className='text-gray-600'>You have no orders yet.</p>
            )}
          </section>
        </div>
      </ProtectedClient>
    </main>
  );
}
