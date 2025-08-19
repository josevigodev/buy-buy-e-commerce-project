'use client';
import { useShoppingCartStore } from '@/store/shoppingCart';
import { ProductCard } from './ProductCard';
import { ProductInCart } from './ProductInCart';

export function Cart() {
  const cart = useShoppingCartStore((state) => state.cart);
  const deleteItem = useShoppingCartStore((state) => state.deleteItem);

  return (
    <section className='grid gap-2 lg:grid-cols-3 xl:grid-cols-4 flex-1 mt-5'>
      {cart.map((item) => (
        <ProductInCart
          key={item.id}
          handleDeleteItemAction={deleteItem}
          itemId={item.id}
          qty={item.qty}
        >
          <ProductCard {...item} />
        </ProductInCart>
      ))}
    </section>
  );
}
