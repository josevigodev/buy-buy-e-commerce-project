import { useShoppingCartStore } from '@/store/shoppingCart';
import { products } from '@/mocks/products.json';

export function useCartInfo() {
  const cart = useShoppingCartStore((state) => state.cart);

  const productsInCart = cart.map((item) => {
    const product = products.find((product) => product.id === item.id);
    if (!product) return null;

    return {
      ...product,
      qty: item.qty,
    };
  });

  const totalPrice = productsInCart.reduce((acc, item) => {
    if (item) {
      return (acc += item.price * item.qty);
    } else {
      return acc;
    }
  }, 0);

  const itemsQty = cart.reduce((acc, item) => {
    if (item.qty) return (acc += item.qty);
    return acc;
  }, 0);

  return { totalPrice, itemsQty };
}
