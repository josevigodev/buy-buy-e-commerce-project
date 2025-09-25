'use client';
import { useShoppingCartStore } from '@/store/shoppingCart';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  itemId: number;
  qty?: number;
}

export const ProductInCart: React.FC<Props> = ({ children, itemId, qty }) => {
  const deleteItem = useShoppingCartStore((state) => state.deleteItem);
  const increaseItemQty = useShoppingCartStore(
    (state) => state.increaseItemQty
  );
  const decreaseItemQty = useShoppingCartStore(
    (state) => state.decreaseItemQty
  );
  const oneItem = qty === 1;
  const disabled = 'opacity-50 pointer-events-none';

  return (
    <div className='pt-1 w-fit h-fit pb-3 overflow-hidden rounded-2xl shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-2xl'>
      {children}
      <div className='flex items-center gap-2 px-3 text-dark-text justify-end lg:justify-center'>
        <div className='flex rounded-sm border-1 border-gray-400'>
          <button
            onClick={() => decreaseItemQty({ itemId })}
            className={`cursor-pointer py-1 px-3 flex items-center justify-center bg-product-frame ${
              oneItem && disabled
            }`}
          >
            -
          </button>
          <span className='flex-1 flex items-center justify-center w-11 select-none'>
            {qty}
          </span>

          <button
            onClick={() => increaseItemQty({ itemId })}
            className='cursor-pointer p-1 px-3 flex items-center justify-center bg-product-frame'
          >
            +
          </button>
        </div>
        <button className='cursor-pointer rounded-sm border-1 border-gray-400 bg-white p-1 px-3 text-nowrap'>
          See others
        </button>
        <button
          onClick={() => deleteItem({ itemId })}
          className='cursor-pointer rounded-sm border-1 border-gray-400 bg-white p-1 px-3'
        >
          Delete
        </button>
      </div>
    </div>
  );
};
