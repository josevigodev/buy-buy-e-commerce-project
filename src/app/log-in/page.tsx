// import { SignIn } from '@/components/SignIn';

import { SignIn } from '@/components/SignIn';

export default function LogInPage() {
  return (
    <main className='flex-1 min-h-dvh mx-auto max-w-lg p-6'>
      <SignIn />
      <small className='text-placeholder block text-pretty text-center mt-10'>
        <span>By continuing, you agree to our </span>
        <a href='' className='text-blue-600'>
          Privacy & Cookie Policy
        </a>
        <span> and </span>
        <a href='' className='text-blue-600'>
          Terms & Conditions
        </a>
        .
      </small>
    </main>
  );
}
