interface Props {
  isOpen: boolean;
  text: string;
  buttonText: string;
  setIsOpen: (value: boolean) => void;
  confirmFunction: () => void;
}

export function ConfirmPopUp({
  text,
  confirmFunction,
  isOpen,
  setIsOpen,
  buttonText,
}: Props) {
  const handleConfirm = () => {
    confirmFunction();
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className='fixed top-0 left-0 w-full px-3 h-full flex items-center justify-center bg-black/60 z-40'>
        <div className='bg-white p-4 rounded shadow-lg form select-none'>
          <h2 className='text-xl font-bold mb-2'>Alert!</h2>
          <p className='mb-4'>{text}</p>
          <div className='flex justify-end space-x-4'>
            <button
              className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer transition-colors duration-200'
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button
              className='px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700 cursor-pointer transition-colors duration-200'
              onClick={handleConfirm}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  );
}
