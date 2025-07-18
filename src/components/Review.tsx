import Image from 'next/image';
import { Rating } from './Rating';
import Profile from '../../public/computer.png';

interface Props {
  user: string;
  comment: string;
  rating: number;
}

export const Review: React.FC<Props> = ({ user, comment, rating }) => {
  return (
    <figure className='flex flex-col w-full shrink-0 bg-product-frame rounded-sm p-5 gap-2.5'>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center gap-1.5'>
          <Image
            className='rounded-full w-auto h-auto object-center object-cover'
            width={32}
            height={32}
            alt={`${user}'s profile picture`}
            src={Profile}
          />
          <div className='flex flex-col'>
            <figcaption className='text-sm font-medium text-dark-text'>
              {user}
            </figcaption>
            <p className='text-xs font-medium text-medium-text'>@{user}</p>
          </div>
        </div>

        <Rating size={18} rating={rating} />
      </div>
      <blockquote className='mt-2 text-md text-dark-text'>{comment}</blockquote>
    </figure>
  );
};
