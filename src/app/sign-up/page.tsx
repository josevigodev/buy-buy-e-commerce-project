import { SignUp } from '@/components/SignUp';

export default function LogInPage() {
  return (
    <main className='flex-1 min-h-dvh mx-auto max-w-lg p-6'>
      <SignUp />
      <small className='text-placeholder block text-pretty text-center mt-10'>
        By continuing, you agree to our{' '}
        <a href='' className='text-blue-600'>
          Privacy & Cookie Policy
        </a>{' '}
        and{' '}
        <a href='' className='text-blue-600'>
          Terms & Conditions
        </a>
        .
      </small>
    </main>
  );
}
