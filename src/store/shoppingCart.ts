import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  id: number;
  qty: number;
}

interface ShoppingCart {
  cart: CartItem[];
  addItem: ({ itemId }: { itemId: number }) => void;
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
        addItem: ({ itemId }) => {
          set((state) => {
            const isItemInCart = state.cart.find((item) => item.id === itemId);
            if (isItemInCart) {
              return {
                cart: state.cart.map((item) => {
                  if (item.id === itemId) {
                    return { ...item, qty: item.qty + 1 };
                  } else {
                    return item;
                  }
                }),
              };
            }
            return {
              cart: [...state.cart, { id: itemId, qty: 1 }],
            };
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
