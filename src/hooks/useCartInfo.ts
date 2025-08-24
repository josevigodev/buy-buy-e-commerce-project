import { useShoppingCartStore } from '@/store/shoppingCart';

export function useCartInfo() {
  const cart = useShoppingCartStore((state) => state.cart);

  const totalPrice = cart.reduce((acc, item) => {
    return (acc += item.price * (item.qty || 1));
  }, 0);

  const itemsQty = cart.reduce((acc, item) => {
    if (item.qty) return (acc += item.qty);
    return acc;
  }, 0);

  return { totalPrice, itemsQty };
}
