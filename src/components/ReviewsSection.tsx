import { reviews } from '../mocks/reviews.json';
import { Review } from './Review';

export function ReviewsSection() {
  return (
    <section className='relative py-10 overflow-hidden mx-auto mt-20 md:mt-28 pb-40'>
      <h2 className='text-2xl lg:text-5xl text-center mb-10 font-semibold text-gray-100'>
        What people think about us
      </h2>

      <ul className='flex gap-3.5 reviews-scroll'>
        {[...reviews, ...reviews].map((review, i) => (
          <li key={`${review.id}-${i}`}>
            <Review {...review} />
          </li>
        ))}
      </ul>
    </section>
  );
}
