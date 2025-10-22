interface Props {
  color: string;
}

export const Loading: React.FC<Props> = ({ color }) => {
  return (
    <div className='flex items-center justify-center gap-1.5'>
      <span className={`loadingFrame w-2.5 h-2.5 rounded-full ${color}`}></span>
      <span className={`loadingFrame w-2.5 h-2.5 rounded-full ${color}`}></span>
      <span className={`loadingFrame w-2.5 h-2.5 rounded-full ${color}`}></span>
    </div>
  );
};
