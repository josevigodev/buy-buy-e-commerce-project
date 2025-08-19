'use client';
import { useShoppingCartStore } from '@/store/shoppingCart';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  itemId: number;
  qty?: number;
  handleDeleteItemAction: ({ itemId }: { itemId: number }) => void;
}

export const ProductInCart: React.FC<Props> = ({
  children,
  handleDeleteItemAction,
  itemId,
  qty,
}) => {
  const increaseItemQty = useShoppingCartStore(
    (state) => state.increaseItemQty
  );
  const decreaseItemQty = useShoppingCartStore(
    (state) => state.decreaseItemQty
  );
  const oneItem = qty === 1;
  const disabled = 'opacity-50 pointer-events-none';

  return (
    <div className='border-1 border-product-frame bg-product-frame rounded-sm pb-3'>
      <input
        aria-label='select item'
        className='size-4 cursor-pointer mt-2 ml-2'
        type='checkbox'
      />
      {children}
      <div className='flex items-center gap-2 px-3 text-dark-text justify-end lg:justify-center'>
        <div className='flex rounded-sm border-1 border-gray-400'>
          <button
            onClick={() => decreaseItemQty({ itemId })}
            className={`cursor-pointer py-1 px-3 flex items-center justify-center ${
              oneItem && disabled
            }`}
          >
            -
          </button>
          <span className='flex-1 flex items-center justify-center bg-white w-11 select-none'>
            {qty}
          </span>

          <button
            onClick={() => increaseItemQty({ itemId })}
            className='cursor-pointer p-1 px-3 flex items-center justify-center'
          >
            +
          </button>
        </div>
        <button className='cursor-pointer rounded-sm border-1 border-gray-400 bg-white p-1 px-3 text-nowrap'>
          See others
        </button>
        <button
          onClick={() => handleDeleteItemAction({ itemId })}
          className='cursor-pointer rounded-sm border-1 border-gray-400 bg-white p-1 px-3'
        >
          Delete
        </button>
      </div>
    </div>
  );
};
