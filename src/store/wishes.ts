import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishesItem {
  id: number;
}

interface Wishes {
  wishes: WishesItem[];
  addItemToWishes: ({ itemId }: { itemId: number }) => void;
  deleteItemFromWishes: ({ itemId }: { itemId: number }) => void;
  clearWishes: () => void;
}

export const useWishesStore = create<Wishes>()(
  persist(
    (set) => ({
      wishes: [],
      addItemToWishes: ({ itemId }) => {
        set((state) => {
          return {
            wishes: [...state.wishes, { id: itemId }],
          };
        });
      },
      deleteItemFromWishes({ itemId }) {
        set((state) => {
          const wishes = state.wishes.filter((item) => item.id !== itemId);
          return { wishes };
        });
      },
      clearWishes() {
        set({ wishes: [] });
      },
    }),
    {
      name: 'wishes',
    }
  )
);
