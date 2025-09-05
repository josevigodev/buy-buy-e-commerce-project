import { useIndex } from '@/hooks/useIndex';
import { reviews } from '../mocks/reviews.json';
import { Review } from './Review';

export function ReviewsSection() {
  const { index } = useIndex({ length: reviews.length, delay: 5000 });

  return (
    <section className='relative overflow-hidden max-w-2xl mx-auto mt-9 bg-light-text md:mt-13'>
      <h2 className='text-2xl text-center mb-3.5 font-semibold text-dark-text'>
        Testimonials
      </h2>

      <ul className='flex justify-start'>
        {reviews.map((review, i) => (
          <li
            key={`${review.id}-${i}`}
            className={`shrink-0 w-full transition-transform duration-200`}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            <Review {...review} />
          </li>
        ))}
      </ul>
    </section>
  );
}
