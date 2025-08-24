'use client';
import { useShoppingCartStore } from '@/store/shoppingCart';
import { ProductCard } from './ProductCard';
import { useCartInfo } from '@/hooks/useCartInfo';

export function OrderSummary() {
  const cart = useShoppingCartStore((state) => state.cart);
  const { totalPrice } = useCartInfo();
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
    </>
  );
}
