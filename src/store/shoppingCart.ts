import { Product } from '@/types/fakeStoreApi';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ShoppingCart {
  cart: Product[];
  addItem: ({ item }: { item: Product }) => void;
  deleteItem: ({ itemId }: { itemId: number }) => void;
  clearCart: () => void;
  increaseItemQty: ({ itemId }: { itemId: number }) => void;
  decreaseItemQty: ({ itemId }: { itemId: number }) => void;
}

export const useShoppingCartStore = create<ShoppingCart>()(
  persist(
    (set) => {
      return {
        cart: [],
        addItem: ({ item }) => {
          set((state) => {
            const cart = [
              ...state.cart,
              { ...item, qty: 1, isSelected: false },
            ];
            return { cart };
          });
        },
        deleteItem: ({ itemId }) => {
          set((state) => {
            const cart = state.cart.filter((item) => item.id !== itemId);
            return { cart };
          });
        },
        clearCart: () => {
          set({ cart: [] });
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
            return { cart };
          });
        },
      };
    },
    {
      name: 'cart',
    }
  )
);
