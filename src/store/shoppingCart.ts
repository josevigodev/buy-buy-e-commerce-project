import { Product } from '@/types/fakeStoreApi';
import { create } from 'zustand';

interface ShoppingCart {
  cart: Product[];
  addItem: ({ item }: { item?: Product }) => void;
  deleteItem: ({ itemId }: { itemId: number }) => void;
}

export const useShoppingCartStore = create<ShoppingCart>((set) => ({
  cart: [],
  addItem: ({ item }) => {
    if (item) {
      set((state) => {
        const cart = [...state.cart, item];
        return { cart };
      });
    }
  },
  deleteItem: ({ itemId }) => {
    set((state) => {
      const cart = state.cart.filter((item) => item.id !== itemId);
      return { cart };
    });
  },
}));
