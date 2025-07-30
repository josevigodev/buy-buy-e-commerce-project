import { Filters } from '@/components/Filters';
import { ProductCard } from '@/components/ProductCard';

export default function Marcket() {
  return (
    <main className='flex-1 mb-20 min-h-dvh px-3 lg:flex'>
      <Filters />
      <section className='grid gap-2 lg:grid-cols-4 flex-1 mt-5 lg:pl-3'>
        <div className='border-1 border-product-frame'>
          <ProductCard />
        </div>
        <div className='border-1 border-product-frame'>
          <ProductCard />
        </div>
        <div className='border-1 border-product-frame'>
          <ProductCard />
        </div>
        <div className='border-1 border-product-frame'>
          <ProductCard />
        </div>
        <div className='border-1 border-product-frame'>
          <ProductCard />
        </div>
        <div className='border-1 border-product-frame'>
          <ProductCard />
        </div>
      </section>
    </main>
  );
}
