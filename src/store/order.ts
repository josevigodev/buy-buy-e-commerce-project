import { Product } from '@/types/fakeStoreApi';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Payment {
  method: string;
  last4: string;
}

interface Shipping {
  name: string;
  address: string;
  city: string;
  country: string;
}

interface Order {
  id: string;
  products: Product[];
  shipping: Shipping;
  payment: Payment;
}

interface OrderStore {
  order: Order;
  updateProducts: ({ products }: { products: Product[] }) => void;
  updateShipping: ({ shipping }: { shipping: Shipping }) => void;
  updatePayment: ({ payment }: { payment: Payment }) => void;
}

const emptyOrder = {
  id: 'ORD-123456',
  products: [],
  shipping: {
    name: 'John Doe',
    address: '123 Main St',
    city: 'Miami',
    country: 'USA',
  },
  payment: {
    method: 'card',
    last4: '4242',
  },
};

export const useOrderStore = create<OrderStore>()(
  persist(
    (set) => {
      return {
        order: emptyOrder,
        updateProducts: ({ products }) => {
          set((state) => {
            const order = {
              ...state.order,
              products,
            };

            return { order };
          });
        },
        updateShipping: ({ shipping }) => {
          set((state) => {
            const order = {
              ...state.order,
              shipping,
            };

            return { order };
          });
        },
        updatePayment: ({ payment }) => {
          set((state) => {
            const order = {
              ...state.order,
              payment,
            };

            return { order };
          });
        },
      };
    },
    {
      name: 'order',
    }
  )
);
