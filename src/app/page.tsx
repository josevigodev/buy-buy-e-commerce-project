'use client';
import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ArrowRightIcon } from '@/components/Icons';
import { ProductCard } from '@/components/ProductCard';
import { ReviewsSection } from '@/components/ReviewsSection';
import { SideBar } from '@/components/SideBar';
import { useState } from 'react';

export default function Home() {
  const [openSide, setOpenSide] = useState(false);

  return (
    <div className='flex flex-col min-h-dvh bg-light-text'>
      <Header openSideBarAction={setOpenSide} />
      <SideBar openSide={openSide} closeSideBarAction={setOpenSide} />
      <main className='flex-1 '>
        <Hero />
        <section className='bg-light-text px-3 mt-6 max-w-7xl mx-auto md:mt-9'>
          <h2 className='text-2xl text-center mb-3.5'>New products</h2>
          <div className='flex flex-col gap-1.5 lg:flex-row'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <button className='flex items-center text-dark-text'>
            <span>See more</span>
            <span className='grid place-content-center'>
              <ArrowRightIcon className='size-5 stroke-2' />
            </span>
          </button>
        </section>
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}
