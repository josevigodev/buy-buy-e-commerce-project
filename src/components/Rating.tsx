import { StarHalf, StarOff, Star } from './Icons';

interface Props {
  size: number;
  rating: number;
  totalStars?: number;
}

export const Rating: React.FC<Props> = ({ rating, totalStars = 5, size }) => {
  return (
    <article className='flex gap-1 items-center'>
      {Array.from({ length: totalStars }).map((_, i) => {
        const starNumber = i + 1;
        if (rating >= starNumber) {
          return (
            <Star
              key={i}
              className='fill-yellow-500 drop-shadow-md drop-shadow-yellow-500'
              size={size}
            />
          );
        } else if (rating >= starNumber - 0.5) {
          return (
            <StarHalf
              key={i}
              className='text-gray-300 fill-yellow-500 drop-shadow-sm drop-shadow-yellow-500'
              size={size}
            />
          );
        } else {
          return <StarOff key={i} className='text-yellow-500' size={size} />;
        }
      })}
    </article>
  );
};
