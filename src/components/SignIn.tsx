'use client';
import { signIn } from '@/firebase/client';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Lock, Mail } from './Icons';

interface Errors {
  root?: string;
}

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const router = useRouter();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();
    signIn(cleanEmail, password)
      .then(() => router.push('/'))
      .catch(() =>
        setErrors((prev) => ({ ...prev, root: 'Invalid credentials' }))
      );
  };

  return (
    <>
      <form onSubmit={handleSignIn} className='form'>
        <h2 className='text-center text-3xl font-semibold mb-2 text-dark-text'>
          Sign in
        </h2>
        <p className='text-center mb-10 text-xl font-semibold text-gray-500'>
          Welcome back
        </p>
        <div className='flex flex-col gap-5'>
          <label htmlFor='email' className='text-xl font-bold text-gray-600'>
            Email
            <div className='mt-2 flex items-center gap-2 bg-gray-100 text-gray-700 border-1 border-gray-300 p-2 px-3 transition-all duration-250 outline-transparent focus-within:border-gray-500 rounded-sm group text-lg font-normal'>
              <Mail className='group-hover:fill-gray-950 group-focus-within:fill-gray-950 transition-all duration-200' />
              <input
                data-test='email-input'
                autoFocus
                required
                id='email'
                type='email'
                className=' text-gray-600 focus-visible:outline-0 w-full peer'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </label>
          <label htmlFor='password' className='text-xl font-bold text-gray-600'>
            Password
            <div className='mt-2 flex items-center gap-2 bg-gray-100 text-gray-700 border-1 border-gray-300 p-2 px-3 transition-all duration-250 outline-transparent focus-within:border-gray-500 rounded-sm group text-lg font-normal'>
              <Lock className='group-hover:fill-gray-950 group-focus-within:fill-gray-950 transition-all duration-200' />
              <div className='relative w-full'>
                <input
                  required
                  data-test='password-input'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  className='text-gray-600 focus-visible:outline-0 w-full peer'
                />
                <button
                  type='button'
                  title={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword((prev) => !prev)}
                  className='absolute top-1/6 right-3 text-gray-600 cursor-pointer'
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </label>
          {errors.root && (
            <span className='text-red-500 font-normal form'>{errors.root}</span>
          )}
          <button
            data-test='confirm-button'
            type='submit'
            className='bg-dark-gray text-white p-3 font-semibold cursor-pointer rounded-sm'
          >
            Log in
          </button>
        </div>
      </form>
      <Link
        href='/sign-up'
        data-test='change-mode-button'
        className='text-blue-600 block text-pretty text-center text-md mt-10 mx-auto cursor-pointer w-fit'
      >
        Are you new? - Register
      </Link>
    </>
  );
}
