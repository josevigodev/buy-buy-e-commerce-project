import { Rating } from '@/components/Rating';
import { UserIcon } from '@/components/ui/Icons';

interface Props {
  user: string;
  comment: string;
  rating: number;
}

export const Review: React.FC<Props> = ({ user, comment, rating }) => {
  return (
    <figure className='flex flex-col w-md shrink-0 bg-[#48e2] rounded-2xl p-5 gap-2.5 hover:scale-105 hover:shadow-lg hover:shadow-yellow-300 transition-all duration-150 select-none'>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center gap-1.5'>
          <UserIcon className='rounded-full text-white bg-gray-600 p-2 size-10' />
          <div className='flex flex-col'>
            <figcaption className='text-sm font-medium text-white'>
              {user}
            </figcaption>
            <p className='text-xs font-medium text-gray-200'>@{user}</p>
          </div>
        </div>

        <Rating size={18} rating={rating} />
      </div>
      <blockquote className='mt-2 text-md text-white'>{comment}</blockquote>
    </figure>
  );
};
