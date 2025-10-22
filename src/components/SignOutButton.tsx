'use client';
import { signOut } from 'firebase/auth';
import { DoorExit } from '@/components/ui/Icons';
import { auth } from '@/firebase/client';
import { redirect } from 'next/navigation';

export function SignOutButton() {
  const handleClick = () => {
    signOut(auth);
    redirect('/');
  };

  return (
    <button
      onClick={handleClick}
      className='flex items-center justify-between px-4 py-2 bg-dark-text text-white text-md font-semibold rounded-lg shadow-xl border-2 border-dark-text cursor-pointer '
    >
      <span>Sign out</span>
      <DoorExit />
    </button>
  );
}
