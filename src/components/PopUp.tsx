interface Props {
  text: string;
}

export const PopUp: React.FC<Props> = ({ text }) => {
  return (
    <p className='fixed top-15 left-0 right-0 mx-auto w-fit px-4 py-2 bg-green-700 text-white text-md font-semibold rounded-xl shadow-xl pointer-events-none md:text-lg md:px-6 md-py-4 showPopUpFrame'>
      {text}
    </p>
  );
};
