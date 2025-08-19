'use client';
import { useShoppingCartStore } from '@/store/shoppingCart';
import { Cart } from '../../components/Cart';
export default function CartPage() {
  const cart = useShoppingCartStore((state) => state.cart);

  const totalPrice = cart.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);

  return (
    <main className='flex-1 mb-20 px-3'>
      <section className='sticky top-0 flex flex-col border-b-1 border-b-gray-400 gap-5 py-2 bg-white lg:flex-row lg:justify-between'>
        <button className='bg-dark-gray text-white rounded-sm p-2 cursor-pointer lg:order-2'>
          Checkout (1 items)
        </button>
        <div className='flex items-center justify-between flex-1'>
          <label
            htmlFor='select'
            className='select-none cursor-pointer flex items-center gap-1 text-dark-text'
          >
            <input className='size-4' id='select' type='checkbox' />
            Select All
          </label>
          <span className='text-dark-text'>
            Total: ${totalPrice || 0} ({cart.length} item)
          </span>
        </div>
      </section>
      <Cart />
    </main>
  );
}
