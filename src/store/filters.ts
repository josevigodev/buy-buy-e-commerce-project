import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Filters {
  category: string | null;
  brand: string[];
  search: string;
}

interface FilterStore {
  filters: Filters;
  setFilters: ({
    key,
    value,
  }: {
    key: keyof Filters;
    value: string | string[] | null;
  }) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterStore>()(
  persist(
    (set) => {
      return {
        filters: {
          category: null,
          brand: [],
          search: '',
        },
        setFilters: ({ key, value }) => {
          set((state) => {
            return {
              filters: {
                ...state.filters,
                [key]: value,
              },
            };
          });
        },
        resetFilters: () => {
          set(() => ({
            filters: {
              category: null,
              brand: [],
              search: '',
            },
          }));
        },
      };
    },
    {
      name: 'filters',
    }
  )
);
