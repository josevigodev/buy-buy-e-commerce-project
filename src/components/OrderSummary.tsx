'use client';
import { useShoppingCartStore } from '@/store/shoppingCart';
import { ProductCard } from './ProductCard';
import { useCartInfo } from '@/hooks/useCartInfo';
import Link from 'next/link';
import { useShippingForm } from '@/store/shippingForm';
import { useEffect, useState } from 'react';
import { usePaymentForm } from '@/store/paymentForm';
import { usePathname } from 'next/navigation';
import { useOrderStore } from '@/store/order';
import { products } from '@/mocks/products.json';
import { useAuthStore } from '@/store/user';
import { saveOrder } from '@/services/order';

export function OrderSummary() {
  const [showMore, setShowMore] = useState(false);
  const cart = useShoppingCartStore((state) => state.cart);
  const clearCart = useShoppingCartStore((state) => state.clearCart);
  const { totalPrice } = useCartInfo();
  const shippingForm = useShippingForm((state) => state.shippingForm);
  const paymentForm = usePaymentForm((state) => state.paymentForm);
  const user = useAuthStore((state) => state.user);

  const order = useOrderStore((state) => state.order);
  const updateShipping = useOrderStore((state) => state.updateShipping);
  const updatePayment = useOrderStore((state) => state.updatePayment);
  const updateProducts = useOrderStore((state) => state.updateProducts);

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

  const handlePlaceOrderClick = () => {
    const shipping = {
      name: `${shippingForm.firstName} ${shippingForm.lastName}`,
      address: shippingForm.addressLine1,
      city: shippingForm.city,
      country: shippingForm.country,
    };

    updateShipping({ shipping });
  };

  const handleConfirmOrderClick = () => {
    const last4 = paymentForm.cardNumber.slice(-4);
    const payment = {
      method: 'card',
      last4,
    };

    updatePayment({ payment });

    const orderItems = cart
      .map((item) => {
        const product = products.find((product) => product.id === item.id);
        if (product) {
          return {
            ...product,
            qty: item.qty,
          };
        }
        return undefined;
      })
      .filter((item) => item !== undefined);

    updateProducts({ products: orderItems });

    if (user) {
      const userOrder = {
        userId: user.uid,
        items: orderItems,
        total: totalPrice,
        address: order.shipping,
        createdAt: new Date().toISOString(),
        status: 'confirmed',
      };
      saveOrder(userOrder);
    }
    clearCart();
  };
  return (
    <>
      <h2 className='font-bold text-dark-text text-xl xl:text-2xl'>
        Order Summary
      </h2>
      <article className='border-t-1 border-t-gray-400 flex items-center justify-between mt-1 pt-1 xl:mt-3 xl:pt-3'>
        <span>Total:</span>
        <span className='text-xl'>${totalPrice}</span>
      </article>
      <section
        className={`flex flex-col items-center overflow-hidden flex-nowrap gap-3 ${
          showMore ? 'h-auto' : 'h-110'
        }`}
      >
        <ul>
          {cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            if (!product) return null;
            return (
              <li key={item.id}>
                <ProductCard {...product} qty={item.qty} />
              </li>
            );
          })}
        </ul>
      </section>
      {cart.length > 2 && (
        <button
          className='text-dark-gray underline cursor-pointer mt-2'
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? 'Show less' : 'Show more'}
        </button>
      )}
      {isShippingForm ? (
        <Link
          data-test='place-order'
          onClick={handlePlaceOrderClick}
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
          data-test='confirm-order'
          onClick={handleConfirmOrderClick}
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
