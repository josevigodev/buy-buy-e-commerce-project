import { useFilterStore } from '@/store/filters';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export function useSyncFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filters = useFilterStore((state) => state.filters);
  const setFilters = useFilterStore((state) => state.setFilters);

  // Load filters from url on first render
  useEffect(() => {
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category');

    setFilters({ key: 'search', value: search });
    setFilters({ key: 'category', value: category || null });
  }, [searchParams, setFilters]);

  // Update url when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.search) params.set('search', filters.search);
    if (filters.category) params.set('category', filters.category);

    router.replace(`?${params.toString()}`);
  }, [filters, router]);
}
