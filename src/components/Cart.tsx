'use client';
import { useShoppingCartStore } from '@/store/shoppingCart';
import { ProductCard } from '@/components/product/ProductCard';
import { ProductInCart } from '@/components/product/ProductInCart';
import { useProducts } from '@/hooks/useProducts';

export function Cart() {
  const { products } = useProducts();
  const cart = useShoppingCartStore((state) => state.cart);

  return (
    <section className='grid gap-2 px-3 place-items-center grid-cols-1 md:place-items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 autofit flex-1 mt-5'>
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
