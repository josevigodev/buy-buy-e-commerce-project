import { useShoppingCartStore } from '@/store/shoppingCart';
import { products } from '@/mocks/products.json';

export function useCartInfo() {
  const cart = useShoppingCartStore((state) => state.cart);

  const productsInCart = cart.map((item) => {
    return products.find((product) => product.id === item.id);
  });

  const totalPrice = cart.map((cartItem) => {
    return productsInCart.reduce((acc, item) => {
      if (item) {
        return (acc += item.price * (cartItem.qty || 1));
      } else {
        return acc;
      }
    }, 0);
  });

  const itemsQty = cart.reduce((acc, item) => {
    if (item.qty) return (acc += item.qty);
    return acc;
  }, 0);

  return { totalPrice, itemsQty };
}
