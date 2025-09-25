import { reviews } from '../mocks/reviews.json';
import { Review } from './Review';

export function ReviewsSection() {
  return (
    <section className='relative overflow-hidden mx-auto mt-20 md:mt-28 mb-20'>
      <h2 className='text-3xl text-center mb-10 font-semibold text-dark-text'>
        Testimonials
      </h2>

      <ul className='flex gap-3.5 reviews-scroll'>
        {[...reviews, ...reviews].map((review, i) => (
          <li key={`${review.id}-${i}`} className={`w-full`}>
            <Review {...review} />
          </li>
        ))}
      </ul>
      <div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-1/8 bg-gradient-to-r from-[#fff]'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-1/8 bg-gradient-to-l from-[#fff]'></div>
    </section>
  );
}
