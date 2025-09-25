import { ProductCard } from './ProductCard';
import { Product } from '@/types/fakeStoreApi';
import { useSyncFilters } from '@/hooks/useSyncFilters';

interface Props {
  filteredProducts: Product[];
}

export function ProductCase({ filteredProducts }: Props) {
  useSyncFilters();
  return (
    <section className='gap-2 grid grid-cols-2 lg:grid-cols-4 flex-1 mt-5 lg:pl-3'>
      {filteredProducts.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </section>
  );
}
