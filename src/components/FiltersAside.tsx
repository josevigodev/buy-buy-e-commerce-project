'use client';
import { XIcon } from './Icons';

interface Props {
  openFilter: boolean;
  onOpenFilterAction: (value: boolean) => void;
}

const filters = {
  Field1: ['Smartphones', 'TVs', 'PCs', 'Laptops', 'Watchs'],
  Field2: ['Smartphones', 'TVs', 'PCs', 'Laptops', 'Watchs'],
  Field3: ['Smartphones', 'TVs', 'PCs', 'Laptops', 'Watchs'],
  Field4: ['Smartphones', 'TVs', 'PCs', 'Laptops', 'Watchs'],
};

export function FiltersAside({ openFilter, onOpenFilterAction }: Props) {
  const handleCloseFilter = () => {
    onOpenFilterAction(false);
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-dvh z-40 flex transition-transform duration-500 ease-out lg:w-fit lg:sticky lg:border-r-1 lg:border-r-gray-400 ${
          openFilter ? 'translate-x' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <aside className=' bg-light-text w-[300px] h-full p-2.5'>
          <h2 className='text-center text-xl mb-4 font-semibold text-dark-text'>
            Filters
          </h2>
          <section className='flex flex-col gap-4'>
            {Object.entries(filters).map(([key, fields]) => (
              <div key={key}>
                <h3 className='relative text-lg p-2 w-full text-dark-text text-start'>
                  {key}
                </h3>
                <ul className='flex flex-wrap gap-2 text-sm'>
                  {fields.map((field, i) => (
                    <li
                      key={i + field}
                      className='cursor-pointer py-1 px-2 text-medium-text border-1 border-medium-text'
                    >
                      {field}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className='text-lg'>Price range</h3>
              <small>aqui va el price range</small>
            </div>
          </section>
        </aside>
        <button
          aria-label='close menu'
          onClick={handleCloseFilter}
          className={`h-full flex-1 cursor-pointer text-light-text p-5 flex lg:hidden`}
        >
          <XIcon />
        </button>
      </div>
      {openFilter && (
        <div
          className={`w-full h-dvh z-30 fixed top-0 left-0 bg-alpha lg:hidden`}
        ></div>
      )}
    </>
  );
}
