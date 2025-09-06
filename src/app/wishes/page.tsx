'use client';
import { useWishesStore } from '@/store/wishes';
import { products } from '@/mocks/products.json';
import { ProductInWishes } from '../../components/ProductInWishes';
import { ProductCard } from '@/components/ProductCard';

export default function WishesPage() {
  const wishes = useWishesStore((state) => state.wishes);
  return (
    <main className='flex-1 mb-20 px-3 min-h-dvh md:flex-row lg:px-15'>
      <h2 className='text-center text-2xl font-semibold text-dark-text mt-3'>
        WISH LIST
      </h2>
      {wishes.length < 1 && (
        <section className='flex items-center justify-center h-150'>
          <h2 className='text-2xl text-dark-gray font-semibold text-center pointer-events-none'>
            Add products to the wish list to see them here
          </h2>
        </section>
      )}
      <section className='grid gap-2 lg:grid-cols-3 xl:grid-cols-4 flex-1 mt-5'>
        {wishes.map((item) => {
          const product = products.find((product) => product.id === item.id);
          if (!product) return null;

          return (
            <ProductInWishes key={item.id} itemId={item.id}>
              <ProductCard {...product} />
            </ProductInWishes>
          );
        })}
      </section>
    </main>
  );
}
