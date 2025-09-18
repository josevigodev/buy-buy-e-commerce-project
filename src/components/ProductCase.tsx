import Link from 'next/link';
import { ProductCard } from './ProductCard';
import { Product } from '@/types/fakeStoreApi';
import { slugify } from '@/utils/slugify';
import { useSyncFilters } from '@/hooks/useSyncFilters';

interface Props {
  filteredProducts: Product[];
}

export function ProductCase({ filteredProducts }: Props) {
  useSyncFilters();
  return (
    <section className='grid gap-2 lg:grid-cols-4 flex-1 mt-5 lg:pl-3'>
      {filteredProducts.map((item) => (
        <Link
          href={`/products/${slugify(item.title)}`}
          key={item.id}
          className='border-1 border-product-frame flex h-fit'
        >
          <ProductCard {...item} />
        </Link>
      ))}
    </section>
  );
}
