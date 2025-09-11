'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/user';
import { Loading } from './Loading';

export default function ProtectedClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useAuthStore((state) => state.user);
  const loading = useAuthStore((state) => state.loading);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/log-in');
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <section className='absolute top-0 left-0 right-0 mx-auto h-dvh grid place-content-center'>
        <Loading color='bg-blue-500' />
      </section>
    );
  }

  return <>{children}</>;
}
