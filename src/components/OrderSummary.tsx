'use client';
import { useShoppingCartStore } from '@/store/shoppingCart';
import { ProductCard } from './ProductCard';
import { useCartInfo } from '@/hooks/useCartInfo';
import Link from 'next/link';
import { useShippingForm } from '@/store/shippingForm';
import { useEffect, useState } from 'react';
import { usePaymentForm } from '@/store/paymentForm';
import { usePathname } from 'next/navigation';

export function OrderSummary() {
  const cart = useShoppingCartStore((state) => state.cart);
  const { totalPrice } = useCartInfo();
  const shippingForm = useShippingForm((state) => state.shippingForm);
  const paymentForm = usePaymentForm((state) => state.paymentForm);
  const [isValid, setIsValid] = useState({
    shippingForm: false,
    paymentForm: false,
  });

  const isShippingForm = usePathname() === '/checkout';
  const isPaymentForm = usePathname() === '/payment';

  useEffect(() => {
    setIsValid((state) => {
      if (shippingForm.firstName) {
        return {
          ...state,
          shippingForm: true,
        };
      } else {
        return {
          ...state,
          shippingForm: false,
        };
      }
    });
  }, [shippingForm]);

  useEffect(() => {
    setIsValid((state) => {
      if (paymentForm.name) {
        return {
          ...state,
          paymentForm: true,
        };
      } else {
        return {
          ...state,
          paymentForm: false,
        };
      }
    });
  }, [paymentForm]);
  return (
    <>
      <h2 className='font-bold text-dark-text text-xl xl:text-2xl'>
        Order Summary
      </h2>
      <article className='border-t-1 border-t-gray-400 flex items-center justify-between mt-1 pt-1 xl:mt-3 xl:pt-3'>
        <span>Total:</span>
        <span className='text-xl'>${totalPrice}</span>
      </article>
      <section className='flex flex-col items-center gap-3'>
        {cart.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </section>
      {isShippingForm ? (
        <Link
          href={'/payment'}
          className={`bg-dark-gray text-white p-3 font-semibold rounded-sm mt-3 text-center ${
            isValid.shippingForm
              ? 'cursor-pointer'
              : 'cursor-default opacity-70 pointer-events-none'
          }`}
        >
          Place order
        </Link>
      ) : isPaymentForm ? (
        <Link
          href={'/order-confirmed'}
          className={`bg-dark-gray text-white p-3 font-semibold rounded-sm mt-3 text-center ${
            isValid.paymentForm
              ? 'cursor-pointer'
              : 'cursor-default opacity-70 pointer-events-none'
          }`}
        >
          Confirm your order
        </Link>
      ) : null}
    </>
  );
}
