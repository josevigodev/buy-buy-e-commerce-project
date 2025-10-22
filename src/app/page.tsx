import { Hero } from '@/components/Hero';
import { ReviewsSection } from '@/components/ReviewsSection';
import { slugify } from '@/utils/slugify';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@/components/ui/Icons';
import { getProductsByCategory } from '@/utils/getProductsByCategory';

const categories = [
  {
    category: 'gaming',
    title: 'Want to play?',
  },
  {
    category: 'mobile',
    title: 'Grab your phone',
  },
  {
    category: 'audio',
    title: 'Listen to music',
  },
  {
    category: 'tv',
    title: 'Watch TV',
  },
];

export default function Home() {
  return (
    <main className='flex-1'>
      <Hero />
      <div className='bg-gradient-to-b from-black to-dark-gray'>
        <section className='px-3 max-w-[1500px] mx-auto grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-4 gap-4'>
          {categories.map((article) => (
            <article
              key={article.category}
              className={`animated-background w-full flex flex-col gap-4 bg-gradient-to-br from-blue-200 to-white rounded-lg p-4 pb-30 relative transition-all duration-150 md:hover:scale-105 md:hover:shadow-lg md:hover:shadow-yellow-400`}
            >
              <div className='grid grid-cols-2 gap-4'>
                {getProductsByCategory(article.category)
                  .slice(1, 5)
                  .map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${slugify(product.title)}`}
                      className='bg-white p-2 rounded-lg'
                    >
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={200}
                        height={200}
                        className='w-full object-cover object-center'
                      />
                    </Link>
                  ))}
              </div>
              <Link
                href={`/marcket?category=${article.category}`}
                className=' bg-yellow-400 text-black font-bold px-6 py-3 rounded-2xl hover:bg-yellow-300 transition absolute bottom-4 self-end flex'
              >
                {article.title} <ArrowRightIcon />
              </Link>
            </article>
          ))}
        </section>
        <ReviewsSection />
      </div>
    </main>
  );
}
