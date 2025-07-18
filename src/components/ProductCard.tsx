import Image from 'next/image';
import { Rating } from './Rating';

export function ProductCard() {
  return (
    <article className='flex border-1 border-product-frame rounded-sm lg:flex-col'>
      <div className='w-1/3 p-2 flex items-center justify-center bg-product-frame lg:w-full'>
        <Image
          width={200}
          height={200}
          src='/computer.png'
          alt='computer'
        ></Image>
      </div>
      <div className='flex-1 p-2 flex flex-col text-dark-text gap-1 md:p-3'>
        <p className='line-clamp-4 text-balance '>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident in
          quis ducimus voluptatem nobis temporibus perspiciatis suscipit tempora
          placeat autem deleniti consequuntur perferendis similique, illum,
          possimus voluptas ut deserunt maxime.
        </p>
        <div className='flex items-center gap-1 text-sm'>
          <span>4.2</span>
          <Rating size={18} rating={4.2} />
          <span>(13.1k)</span>
        </div>
        <span className='text-amber-600 font-bold'>
          <strong className='font-normal text-sm mr-0.5'>$</strong>323
        </span>
      </div>
    </article>
  );
}
