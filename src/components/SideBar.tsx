import { XIcon } from './Icons';

interface Props {
  openSide: boolean;
  closeSideBarAction: (value: boolean) => void;
}

export function SideBar({ openSide, closeSideBarAction }: Props) {
  const handleClick = () => {
    closeSideBarAction(false);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-dvh z-40 flex transition-transform duration-500 ease-out ${
          openSide ? 'translate-x' : '-translate-x-full'
        }`}
      >
        <aside className=' bg-light-text w-[300px] h-full p-2.5'>
          <h2>Menu</h2>
        </aside>
        <button
          aria-label='close menu'
          onClick={handleClick}
          className={`h-full flex-1 cursor-pointer text-light-text flex p-5 `}
        >
          <XIcon />
        </button>
      </div>
      {openSide && (
        <div className={`w-full h-dvh z-30 fixed top-0 left-0 bg-alpha`}></div>
      )}
    </>
  );
}
