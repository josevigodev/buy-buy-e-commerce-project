'use client';
import { useShoppingCartStore } from '@/store/shoppingCart';
import { ReactNode, useState } from 'react';
import { Trash } from '@/components/ui/Icons';
import { ConfirmPopUp } from '@/components/ui/ConfirmPopUp';

interface Props {
  children: ReactNode;
  itemId: number;
  qty?: number;
}

export const ProductInCart: React.FC<Props> = ({ children, itemId, qty }) => {
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      <div className='pt-1 w-fit h-fit pb-3 overflow-hidden rounded-2xl shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-2xl'>
        {children}
        <div className='flex items-center gap-7 px-3 text-dark-text justify-end lg:justify-center'>
          <div className='flex rounded-md overflow-hidden border-1 border-gray-400'>
            <button
              onClick={() => decreaseItemQty({ itemId })}
              className={`cursor-pointer py-2 px-4 flex items-center justify-center bg-yellow-500 hover:opacity-80 active:opacity-100 transition-opacity duration-200 ${
                oneItem && disabled
              }`}
            >
              -
            </button>
            <span className='flex-1 flex text-lg items-center justify-center w-11 select-none'>
              {qty}
            </span>

            <button
              onClick={() => increaseItemQty({ itemId })}
              className='cursor-pointer py-2 px-4 flex items-center justify-center bg-yellow-500 hover:opacity-80 active:opacity-100 transition-opacity duration-200'
            >
              +
            </button>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className='flex rounded-md px-4 py-2 cursor-pointer overflow-hidden border-1 border-gray-400 hover:bg-gray-200 hover:text-red-600 hover:border-red-600 transition-colors duration-200'
          >
            <Trash className='size-6' />
            <span>Delete</span>
          </button>
        </div>
      </div>
      <ConfirmPopUp
        buttonText='Delete'
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        confirmFunction={() => deleteItem({ itemId })}
        text='Are you sure you want to remove this item from the cart?'
      />
    </>
  );
};
