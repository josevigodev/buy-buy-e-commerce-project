'use client';
import { useShoppingCartStore } from '@/store/shoppingCart';
import { ProductCard } from './ProductCard';
import { ProductInCart } from './ProductInCart';
import { products } from '@/mocks/products.json';

export function Cart() {
  const cart = useShoppingCartStore((state) => state.cart);

  return (
    <section className='grid gap-2 lg:grid-cols-3 xl:grid-cols-4 flex-1 mt-5'>
      {cart.map((item) => {
        const product = products.find((product) => product.id === item.id);
        if (!product) return null;

        return (
          <ProductInCart key={item.id} itemId={item.id} qty={item.qty}>
            <ProductCard {...product} />
          </ProductInCart>
        );
      })}
    </section>
  );
}
