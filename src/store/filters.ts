import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Filters {
  category: string | null;
  color: string | null;
  brand: string[];
  minPrice: number;
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
  setBrand: (value: string) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterStore>()(
  persist(
    (set) => {
      return {
        filters: {
          category: null,
          color: null,
          brand: [],
          minPrice: 0,
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
        setBrand: (value) => {
          set((state) => {
            if (state.filters.brand.includes(value)) {
              return {
                filters: {
                  ...state.filters,
                  brand: state.filters.brand.filter((b) => b !== value),
                },
              };
            } else {
              return {
                filters: {
                  ...state.filters,
                  brand: [...state.filters.brand, value],
                },
              };
            }
          });
        },
        resetFilters: () => {
          set(() => ({
            filters: {
              category: null,
              color: null,
              minPrice: 0,
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
