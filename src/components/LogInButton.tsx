import { UserIcon } from '@/components/ui/Icons';
import Link from 'next/link';

export function LogInButton() {
  return (
    <Link
      href='/log-in'
      className='flex items-center justify-between px-4 py-2 text-dark-text text-md font-semibold rounded-lg shadow-xl border-2 border-dark-text cursor-pointer w-fit'
    >
      <span>Log in</span>
      <UserIcon />
    </Link>
  );
}
