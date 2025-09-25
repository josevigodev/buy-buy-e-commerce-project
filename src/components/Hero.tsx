import Link from 'next/link';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className='relative bg-gradient-to-b from-gray-900 to-black text-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center lg:justify-between min-h-[85vh]'>
        {/* Left Side - Text */}
        <motion.div
          className='flex flex-col items-start gap-6 max-w-xl'
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-4xl lg:text-6xl font-extrabold leading-tight'>
            Buy-Buy: Your One-Stop Shop for{' '}
            <span className='text-yellow-400'>Tech & Style</span>
          </h1>
          <p className='text-lg lg:text-xl text-gray-300'>
            Explore the latest gadgets, accessories, and trends — all in one
            place. Quality, convenience, and the best prices, guaranteed.
          </p>
          <div className='flex gap-4 mt-4'>
            <Link
              href='/marcket'
              className='bg-yellow-400 text-black font-bold px-6 py-3 rounded-2xl hover:bg-yellow-300 transition'
            >
              Shop Now
            </Link>
            <Link
              href='/about'
              className='border border-gray-400 px-6 py-3 rounded-2xl hover:bg-gray-800 transition'
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className='mt-10 lg:mt-0'
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src='/hero-product.png'
            alt='Featured Product'
            className='w-[350px] lg:w-[450px] drop-shadow-2xl'
          />
        </motion.div>
      </div>

      {/* Decorative gradient overlay */}
      <div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent'></div>
    </section>
  );
}
