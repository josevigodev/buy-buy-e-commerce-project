import { Product } from '@/types/fakeStoreApi';
import { getLocalStorage, updateLocalStorage } from '@/utils/localStorage';
import { create } from 'zustand';

interface ShoppingCart {
  cart: Product[];
  addItem: ({ item }: { item: Product }) => void;
  deleteItem: ({ itemId }: { itemId: number }) => void;
  increaseItemQty: ({ itemId }: { itemId: number }) => void;
  decreaseItemQty: ({ itemId }: { itemId: number }) => void;
}

export const useShoppingCartStore = create<ShoppingCart>((set) => ({
  cart: getLocalStorage('cart') || [],
  addItem: ({ item }) => {
    set((state) => {
      const cart = [...state.cart, { ...item, qty: 1 }];
      updateLocalStorage('cart', cart);
      return { cart };
    });
  },
  deleteItem: ({ itemId }) => {
    set((state) => {
      const cart = state.cart.filter((item) => item.id !== itemId);
      updateLocalStorage('cart', cart);
      return { cart };
    });
  },
  increaseItemQty: ({ itemId }) => {
    set((state) => {
      const cart = state.cart.map((item) => {
        if (item.id === itemId && item.qty) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        } else {
          return item;
        }
      });
      updateLocalStorage('cart', cart);
      return { cart };
    });
  },
  decreaseItemQty: ({ itemId }) => {
    set((state) => {
      const cart = state.cart.map((item) => {
        if (item.id === itemId && item.qty && item.qty > 1) {
          return {
            ...item,
            qty: item.qty - 1,
          };
        } else {
          return item;
        }
      });
      updateLocalStorage('cart', cart);
      return { cart };
    });
  },
}));
