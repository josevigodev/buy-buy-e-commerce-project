import { reviews } from '../mocks/reviews.json';
import { Review } from './Review';

export function ReviewsSection() {
  return (
    <section className='relative px-3 overflow-hidden max-w-2xl mx-auto mt-5 bg-light-text md:mt-9'>
      <h2 className='text-2xl text-center mb-3.5'>Testimonials</h2>

      <div className='flex justify-start gap-5'>
        {reviews.map((review, index) => (
          <Review key={`${review.id}-${index}`} {...review} />
        ))}
      </div>
    </section>
  );
}
